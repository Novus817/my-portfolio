import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/Project';
import { urlFor } from '@/sanity/sanity-utils';

type Props = {
  projects: Project[];
};

export default async function RecentProjects({ projects }: Props) {
  return (
    <>
      <h2 className="recent-projects-heading">Recent Projects</h2>
      <div className="recent-project">
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project._id}
            className="project-link"
          >
            {project.image && (
              <Image
                src={urlFor(project.image).width(750).quality(80).url()}
                alt={project.alt || project.name}
                width={750}
                height={300}
                sizes="(max-width: 768px) 100vw, 750px"
                className="project-img"
                placeholder="blur"
                blurDataURL={urlFor(project.image).width(20).quality(20).url()}
              />
            )}
            <div className="project-name">{project.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
