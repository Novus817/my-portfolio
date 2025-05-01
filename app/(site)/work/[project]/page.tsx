import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GoBackButton from '../../components/GoBackButton';

type Props = {
  params: { project: string };
};

export async function generateMetadata({ params }: Props) {
  const project = await getProject(params.project);

  if (!project) {
    return {
      title: 'Anthony Marrello | Portfolio | Not Found',
      description: 'Project not found',
    };
  }

  return {
    title: `Anthony Marrello | Portfolio | ${project.name}`,
    description: `A portfolio project of mine for ${project.name}`,
  };
}

export default async function Project({ params }: Props) {
  const project = await getProject(params.project);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <header className="project-detail-header">
        <div className="project-detail-nav">
          <GoBackButton />
          <Link
            href={`${project.url}`}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="view-project-link"
          >
            View Project
          </Link>
        </div>

        <h1 className="project-detail-title">{project.name}</h1>
      </header>

      <div className="mt-5">
        <PortableText value={project.content} />
      </div>

      {project.image && (
        <Image
          src={project.image}
          alt={project.alt || project.name}
          width={1920}
          height={1080}
          className="project-detail-img"
        />
      )}
    </div>
  );
}

export const revalidate = 0;
