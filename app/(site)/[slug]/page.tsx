import { getPage, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';

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

      {page?.slug === 'contact' && (
        <div className="contact-wrap">
          <h2 className="contact-title">How can I help?</h2>
          <Link href="mailto:apm817@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
          </Link>
          <Image
            src="/dev-graphic.svg"
            width={424}
            height={334}
            className="contact-img"
            alt="coding dev illustration"
          />
        </div>
      )}

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
