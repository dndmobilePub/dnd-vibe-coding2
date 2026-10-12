import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = JSON.parse(readFileSync(resolve(root, 'token.json'), 'utf8'));
const tokens = new Map();
function flatten(group, path = []) {
  for (const [key, value] of Object.entries(group)) {
    if (key.startsWith('$')) continue;
    const next = [...path, key];
    if (value && typeof value === 'object' && '$value' in value) tokens.set(next.join('.'), value.$value);
    else if (value && typeof value === 'object') flatten(value, next);
    else throw new Error(`Invalid token: ${next.join('.')}`);
  }
}
flatten(source);
const variable = path => `--${path.replaceAll('.', '-')}`;
function resolveValue(path, stack = []) {
  if (stack.includes(path)) throw new Error(`Circular token: ${[...stack, path].join(' → ')}`);
  if (!tokens.has(path)) throw new Error(`Missing token: ${path}`);
  const value = tokens.get(path);
  if (typeof value !== 'string' && typeof value !== 'number') throw new Error(`Unsupported token: ${path}`);
  return String(value).replace(/\{([^}]+)\}/g, (_, ref) => {
    resolveValue(ref, [...stack, path]);
    return `var(${variable(ref)})`;
  });
}
const declarations = [...tokens.keys()].map(path => `  ${variable(path)}: ${resolveValue(path)};`);
const theme = [...tokens.keys()].filter(path => path.startsWith('semantic.')).map(path =>
  `  --${path.slice('semantic.'.length).replaceAll('.', '-')}: var(${variable(path)});`);
mkdirSync(resolve(root, 'src/styles'), { recursive: true });
writeFileSync(resolve(root, 'src/styles/tokens.css'), `/* Generated from token.json. Do not edit. */\n:root {\n${declarations.join('\n')}\n}\n\n@theme inline {\n${theme.join('\n')}\n}\n`);
console.log(`Generated ${tokens.size} tokens.`);
