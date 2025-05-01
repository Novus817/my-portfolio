import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
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
      <div className="content-section">
        {content && <PortableText value={content} />}
      </div>
      <div className="work-wrap">
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project._id}
            className="project-link"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt || project.name}
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
