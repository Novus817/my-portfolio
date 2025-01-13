import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function RecentProjects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mt-8 font-bold text-orange-700 text-3xl">Recent Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(0, 3).map((project) => (
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
    </>
  );
}
