# DND Vibe Coding

Next.js App Router, TypeScript, Tailwind CSS 기반 샘플 프로젝트입니다.
외부 서비스나 API 키 없이 실행할 수 있습니다. 빌드 시 외부 폰트를 다운로드하지 않습니다.

## 요구 사항

Node.js 20.9 이상 (클라우드 환경에서 Node.js 24 사용), npm.

## 개발

```sh
npm ci
npm run dev -- --hostname 0.0.0.0 --port 3000
```

홈페이지는 `/` 경로에서 제공됩니다.

## 검증 및 프로덕션 실행

```sh
npm run lint
npm run build
npx tsc --noEmit
npm run start -- --hostname 0.0.0.0 --port 3000
```

클라우드 환경에서 npm 캐시 경로가 쓰기 불가능한 경우 `npm_config_cache=/workspace/.npm-cache`를 지정하세요.
