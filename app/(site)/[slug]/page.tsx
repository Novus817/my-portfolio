import { getPage, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

type Props = {
  params: { slug: string; title: string };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params.slug);

  return {
    title: `Anthony Marrello | Portfolio | ${page.title}`,
    description: `My portfolio page for ${page.title}`,
  };
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const projects = await getProjects();
  revalidatePath('/work/[project]');

  return (
    <div>
      <h1 className="text-orange-800 text-3xl sm:text-4xl md:text-5xl drop-shadow font-extrabold mb-6">
        {page.title}
      </h1>

      {page.slug === 'about' && (
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

      {page.slug === 'contact' && (
        <div className="my-4 grid grid-cols">
          <h2>Contact Me</h2>
          <form></form>
        </div>
      )}

      <div className="text-lg text-white-700 mt-5">
        <PortableText value={page.content} />
      </div>

      {page.slug === 'work' && (
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
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
