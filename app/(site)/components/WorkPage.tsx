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
                src={urlFor(project.image).width(750).quality(80).url()}
                alt={project.alt || project.name}
                width={750}
                height={300}
                sizes="(max-width: 768px) 100vw, 750px"
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
