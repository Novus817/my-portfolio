import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

type Props = {
  params: { project: string };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  revalidatePath(params.project);

  return {
    title: `Anthony Marrello | Portfolio | ${project.name}`,
    description: `A portfolio project of mine for ${project.name}`,
    // description: `This is the page of ${project.slug.replace(/-/g, ' ')}`,
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex flex-col">
        <div className="flex justify-between mb-5 sm:mb-8 md:mb-10">
          <Link
            href="/work"
            title="Go Back"
            className="bg-orange-700 rounded-md md:rounded-lg text-white font-bold py-2 px-4 whitespace-nowrap hover:bg-orange-800 transition"
          >
            Go Back
          </Link>
          <Link
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 rounded-lg text-white font-bold py-2 px-4 whitespace-nowrap hover:bg-orange-800 transition"
          >
            View Project
          </Link>
        </div>

        <h1 className="text-orange-800 text-2xl sm:text-4xl md:text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>
      </header>

      {/* content goes here */}
      <div className="mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-500 object-cover rounded-xl"
      />
    </div>
  );
}
