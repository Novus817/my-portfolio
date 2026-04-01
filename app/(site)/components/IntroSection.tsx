import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="py-10 sm:py-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
        Front-End Developer • React • Next.js • TypeScript
      </p>

      <h1 className="heading-text">
        Building modern, performant web experiences with
        <span className="heading-span"> thoughtful UI and clean code</span>.
      </h1>

      <p className="tagline-text max-w-2xl">
        I’m Anthony Marrello, a developer with deep web experience focused on
        creating polished interfaces, scalable front-end architecture, and modern
        user experiences with React, Next.js, TypeScript, and headless CMS tools.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-amber-400 text-zinc-900 hover:bg-amber-300 transition"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
