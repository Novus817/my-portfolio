import { getPage, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';

type Props = {
  params: { slug: string; title: string };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params.slug);

  return {
    title: `Anthony Marrello | Portfolio | ${page?.title}`,
    description: `My portfolio page for ${page?.title}`,
  };
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const projects = await getProjects();

  if (!page || !projects) {
    return notFound();
  }

  return (
    <div>
      <h1 className="page-title">{page?.title}</h1>

      {page?.slug === 'about' && <AboutPage />}

      {page?.slug === 'contact' && <ContactPage />}

      <div className="content-section">
        <PortableText value={page?.content} />
      </div>

      {page?.slug === 'work' && (
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
      )}
    </div>
  );
}
