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
  const eyebrow = intro?.eyebrow ?? 'Full-Stack Developer';

  const heading = intro?.heading ?? 'Building thoughtful digital experiences for';

  const headingHighlight = intro?.headingHighlight ?? ' the modern web';

  const description =
    intro?.description ??
    'Experienced web developer focused on creating polished interfaces, maintainable applications, and thoughtful user experiences with modern front-end technologies.';

  const primaryButtonText = intro?.primaryButtonText ?? 'View My Work';
  const primaryButtonHref = intro?.primaryButtonHref ?? '/work';

  const secondaryButtonText = intro?.secondaryButtonText ?? 'About Me';
  const secondaryButtonHref = intro?.secondaryButtonHref ?? '/about';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow fade-up delay-1">{eyebrow}</p>

        <h1 className="hero-heading fade-up delay-2">
          {heading}
          <span className="hero-heading-accent">{headingHighlight}</span>.
        </h1>

        <p className="hero-description fade-up delay-3">{description}</p>

        <div className="hero-actions fade-up delay-4">
          <Link href={primaryButtonHref} className="hero-primary-action">
            {primaryButtonText}
          </Link>

          <Link href={secondaryButtonHref} className="hero-secondary-action">
            {secondaryButtonText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
