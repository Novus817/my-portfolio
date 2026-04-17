import Link from 'next/link';

type IntroSectionProps = {
  intro?: {
    eyebrow?: string;
    heading?: string;
    headingHighlight?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
  };
};

export default function IntroSection({ intro }: IntroSectionProps) {
  const eyebrow =
    intro?.eyebrow ?? 'Front-End Developer • React • Next.js • TypeScript';

  const heading =
    intro?.heading ?? 'Building modern, performant web experiences with';

  const headingHighlight =
    intro?.headingHighlight ?? ' thoughtful UI and clean code';

  const description =
    intro?.description ??
    'I’m Anthony Marrello, a developer with deep web experience focused on creating polished interfaces, scalable front-end architecture, and modern user experiences with React, Next.js, TypeScript, and headless CMS tools.';

  const primaryButtonText = intro?.primaryButtonText ?? 'View Projects';
  const primaryButtonHref = intro?.primaryButtonHref ?? '/work';

  const secondaryButtonText = intro?.secondaryButtonText ?? 'Contact Me';
  const secondaryButtonHref = intro?.secondaryButtonHref ?? '/contact';

  return (
    <section className="py-10 sm:py-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400 fade-up delay-1">
        {eyebrow}
      </p>

      <h1 className="heading-text fade-up delay-2">
        {heading}
        <span className="heading-span">{headingHighlight}</span>.
      </h1>

      <p className="tagline-text max-w-2xl fade-up delay-3">{description}</p>

      <div className="flex flex-col gap-4 sm:flex-row fade-up delay-4">
        <Link
          href={primaryButtonHref}
          className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-semibold text-zinc-900 transition hover:bg-amber-300"
        >
          {primaryButtonText}
        </Link>

        <Link
          href={secondaryButtonHref}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </section>
  );
}
