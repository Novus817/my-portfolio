import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/Project';
import { urlFor } from '@/sanity/sanity-utils';

type Props = {
  projects: Project[];
};

export default async function RecentProjects({ projects }: Props) {
  return (
    <section className="recent-projects-section">
      <div className="section-heading-wrap">
        <h2 className="recent-projects-heading">Recent Projects</h2>
        <p className="section-copy">
          A selection of recent work focused on modern front-end development, UI
          implementation, and content-driven web experiences.
        </p>
      </div>

      <div className="project-grid">
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
                <h3 className="project-card-title">{project.name}</h3>

                {project.summary && (
                  <p className="project-card-summary">{project.summary}</p>
                )}
              </div>

              {project.techStack?.length ? (
                <ul
                  className="project-card-tags"
                  aria-label={`${project.name} tech stack`}
                >
                  {project.techStack.slice(0, 5).map((item) => (
                    <li key={item} className="project-card-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="project-card-footer">
                <span className="project-card-cta">View Case Study</span>
                <span className="project-card-arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
