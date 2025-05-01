import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/Project';

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
                src={project.image}
                alt={project.name || project.name}
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
