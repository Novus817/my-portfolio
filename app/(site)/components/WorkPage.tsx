import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

type Props = {
  content: PortableTextBlock[] | undefined;
};

export default async function WorkPage({ content }: Props) {
  const projects = await getProjects();

  if (!projects) {
    return notFound();
  }

  return (
    <>
      <div className="content-section">
        <PortableText value={content} />
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
                alt={project.name}
                width={750}
                height={300}
                className="project-img"
              />
            )}

            <div className="project-name">{project?.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
