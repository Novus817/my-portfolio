import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import {
  FaLinkedin,
  FaGithub,
  FaNode,
  FaEnvelope,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaCircleInfo,
  FaCode,
} from 'react-icons/fa6';

type Props = {
  params: { slug: string; title: string; project: string };
};

export default async function Home({ params }: Props) {
  const projects = await getProjects();
  revalidatePath(params.project);

  return (
    <div className="container mx-auto">
      <h1 className="text-center sm:text-left mb-2 sm:mb-5 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide">
        Hello, I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-800 to-orange-600 via-orange-700 bg-clip-text text-transparent">
          Anthony
        </span>
        !
      </h1>

      <p className="text-lg sm:text-xl text-center sm:text-left mb-10 sm:mb-14 tracking-widest">
        Welcome to My Portfolio.
      </p>

      <div className="flex flex-col items-center sm:w-[55vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] cred p-5 mb-3 sm:mb-10 md:mb-14 mx-auto">
        <h2 className="text-lg text-center sm:text-xl text-white font-bold mb-3">
          Full-Stack Developer
        </h2>

        <div className="flex flex-row justify-center mb-5">
          <div className="flex items-center mr-4">
            <Link
              href="https://www.linkedin.com/in/anthony-marrello-255a2813/"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-white text-3xl"
              aria-label="Linkedin profile link"
            >
              <FaLinkedin className="hover:fill-orange-500 transition mr-2" />{' '}
            </Link>
            <Link
              href="https://github.com/novus817"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-white hover:color-orange-700 text-3xl"
              aria-label="Github profile link"
            >
              <FaGithub className="hover:fill-orange-500 transition ml-2" />
            </Link>
          </div>
          <div className="flex flex-col ml-4">
            <span className="font-bold border-b-[2px]">
              Specialty Skills Include:
            </span>
            <span className="flex flex-row mx-auto">
              <FaHtml5 className="specialty-icon" />{' '}
              <FaCss3Alt className="specialty-icon" />{' '}
              <FaJs className="specialty-icon" />{' '}
              <FaReact className="specialty-icon" />{' '}
              <FaNode className="specialty-icon" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 place-items-center">
          <Link
            href="/work"
            className="border-2 border-gray-500 rounded-full flex flex-col justify-center items-center text-sm h-[96px] w-[96px] sm:h-[110px] sm:w-[110px] hover:border-green-600 transition"
            aria-label="Link to projects"
          >
            <FaCode className="mb-2 text-3xl" />
            my work
          </Link>

          <Link
            href="/about"
            className="border-2 border-gray-500 rounded-full flex flex-col justify-center items-center text-sm h-[96px] w-[96px] sm:h-[110px] sm:w-[110px] hover:border-green-600 transition"
            aria-label="Link to projects"
          >
            <FaCircleInfo className="mb-2 text-3xl" />
            about me
          </Link>

          <Link
            href="/contact"
            className="border-2 border-gray-500 rounded-full flex flex-col justify-center items-center text-sm h-[96px] w-[96px] sm:h-[110px] sm:w-[110px] hover:border-green-600 transition"
            aria-label="Link to projects"
          >
            <FaEnvelope className="mb-2 text-3xl" />
            contact me
          </Link>
        </div>
      </div>

      <h2 className="mt-8 font-bold text-orange-700 text-3xl">
        Recent Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(0, 3).map(project => (
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
    </div>
  );
}
