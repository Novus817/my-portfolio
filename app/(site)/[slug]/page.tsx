import { getPage, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6';
import { notFound } from 'next/navigation';

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
      <h1 className="text-orange-800 text-3xl sm:text-4xl md:text-5xl drop-shadow font-extrabold mb-6">
        {page?.title}
      </h1>

      {page?.slug === 'about' && (
        <div className="my-4 grid grid-cols">
          <img
            src="/abc-headshot.jpeg"
            width={640}
            height={360}
            className="mx-auto mb-4 max-w-full rounded-lg"
            alt="Me at work"
          />
        </div>
      )}
      {/* sm:h-[1.5rem] sm:w-[2rem] */}
      {page?.slug === 'contact' && (
        <div className="my-4 grid grid-cols">
          <h2 className="mb-5 text-lg">How can I help?</h2>
          <Link
            href="mailto:apm817@gmail.com"
            className="fill-white text-3xl h-[2rem] w-[2rem] mb-10"
          >
            <FaEnvelope className="hover:fill-orange-500 transition mb-2 text-3xl" />
          </Link>
          <img
            src="/dev-graphic.svg"
            className="sm:w-1/2 mx-auto"
            alt="coding dev illustration"
          />
        </div>
      )}

      <div className="text-lg text-white-700 mt-5">
        <PortableText value={page?.content} />
      </div>

      {page?.slug === 'work' && (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(project => (
            <Link
              href={`/work/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-600 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}

              <div className="mt-2 font-extrabold text-orange-600 text-center sm:text-left">
                {project?.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export const revalidate = 0;
