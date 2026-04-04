import { getProject, urlFor } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GoBackButton from '../../components/GoBackButton';

type Props = {
  params: Promise<{ project: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { project: projectSlug } = await params;
  const project = await getProject(projectSlug);

  if (!project) {
    return {
      title: 'Anthony Marrello | Portfolio | Not Found',
      description: 'Project not found',
    };
  }

  return {
    title: `Anthony Marrello | Portfolio | ${project.name}`,
    description:
      project.summary || `A portfolio project of mine for ${project.name}`,
    openGraph: {
      title: `Anthony Marrello | Portfolio | ${project.name}`,
      description:
        project.summary || `A portfolio project of mine for ${project.name}`,
      images: project.image
        ? [{ url: urlFor(project.image).url(), alt: project.alt || project.name }]
        : [],
    },
  };
}

export default async function Project({ params }: Props) {
  const { project: projectSlug } = await params;
  const project = await getProject(projectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <article className="project-detail-page">
      <div className="project-detail-shell">
        <header className="project-detail-header">
          <div className="project-detail-nav">
            <GoBackButton />

            {project.url && (
              <Link
                href={project.url}
                title="View Project"
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-link"
              >
                View Live Project
              </Link>
            )}
          </div>

          <div className="project-detail-heading">
            <h1 className="project-detail-title">{project.name}</h1>

            {project.summary && (
              <p className="project-detail-summary">{project.summary}</p>
            )}

            {project.techStack?.length ? (
              <ul
                className="project-detail-tags"
                aria-label={`${project.name} tech stack`}
              >
                {project.techStack.map((item) => (
                  <li key={item} className="project-detail-tag">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </header>

        {project.image && (
          <div className="project-detail-media">
            <Image
              src={urlFor(project.image).width(1600).quality(80).url()}
              alt={project.alt || project.name}
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 1000px"
              className="project-detail-img"
              placeholder="blur"
              blurDataURL={urlFor(project.image).width(20).quality(20).url()}
            />
          </div>
        )}

        <div className="project-detail-content content-narrow">
          <PortableText value={project.content} />
        </div>
      </div>
    </article>
  );
}

export const revalidate = 60;
