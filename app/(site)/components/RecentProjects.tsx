import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function RecentProjects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="recent-projects-heading">Recent Projects</h2>
      <div className="recent-project">
        {projects.slice(0, 3).map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project._id}
            className="project-link"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="project-img"
              />
            )}
            <div className="project-name">{project.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
