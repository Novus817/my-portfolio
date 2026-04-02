import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import { urlFor } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';

type Props = {
  content: PortableTextBlock[] | undefined;
  projects: Project[] | null;
};

export default function WorkPage({ content, projects }: Props) {
  if (!projects) {
    return notFound();
  }

  return (
    <>
      <div className="content-section work-page-intro">
        {content && <PortableText value={content} />}
      </div>

      <div className="project-grid project-grid--work">
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project._id}
            className="project-card"
          >
            {project.image && (
              <div className="project-card-media">
                <Image
                  src={urlFor(project.image).width(900).quality(80).url()}
                  alt={project.alt || project.name}
                  width={900}
                  height={560}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  className="project-card-image"
                  placeholder="blur"
                  blurDataURL={urlFor(project.image).width(20).quality(20).url()}
                />
              </div>
            )}

            <div className="project-card-body">
              <div className="project-card-top">
                <h2 className="project-card-title">{project.name}</h2>

                {project.summary && (
                  <p className="project-card-summary">{project.summary}</p>
                )}
              </div>

              {project.techStack?.length ? (
                <ul
                  className="project-card-tags"
                  aria-label={`${project.name} tech stack`}
                >
                  {project.techStack.slice(0, 6).map((item) => (
                    <li key={item} className="project-card-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="project-card-footer">
                <span className="project-card-cta">View Project Details</span>
                <span className="project-card-arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
