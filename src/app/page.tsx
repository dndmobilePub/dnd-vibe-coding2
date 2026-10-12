export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-50">
      <section className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12">
        <p className="mb-6 text-sm font-semibold tracking-widest text-emerald-400">DND VIBE CODING</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">아이디어를 코드로.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">Next.js 샘플 프로젝트입니다. 이 페이지에서 새로운 서비스를 만들어 보세요.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Next.js', 'TypeScript', 'Tailwind CSS'].map((name) => (
            <span key={name} className="rounded-full border border-zinc-700 px-4 py-2 text-sm">{name}</span>
          ))}
        </div>
        <a href="https://nextjs.org/docs" className="mt-10 inline-block rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-zinc-950 hover:bg-emerald-300">Next.js 문서 보기 →</a>
      </section>
    </main>
  );
}
