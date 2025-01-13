import Link from 'next/link';
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

export default function SpecialtySkills() {
  return (
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
  );
}
