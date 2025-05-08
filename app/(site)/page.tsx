import { getProjects, urlFor } from '@/sanity/sanity-utils';
import IntroSection from './components/IntroSection';
import SpecialtySkills from './components/SpecialtySkills';
import RecentProjects from './components/RecentProjects';

export async function generateMetadata() {
  // Fetch one project for an image
  const projects = await getProjects(1);
  const heroImage = projects[0]?.image
    ? urlFor(projects[0].image).url()
    : '/default-og-image.png'; // Fallback image

  return {
    title: 'Anthony Marrello | Portfolio',
    description:
      'My portfolio showcasing web development projects built with React, Next.js, TypeScript, and Sanity.io.',
    openGraph: {
      title: 'Anthony Marrello | Portfolio',
      description:
        'Explore my web development portfolio with projects built using React, Next.js, TypeScript, and Sanity.io.',
      images: [{ url: heroImage, alt: 'Anthony Marrello Portfolio' }],
      url: 'https://anthonymarrello.com',
      type: 'website',
    },
  };
}

export default async function Home() {
  // Fetch 3 newest projects
  const projects = await getProjects(3);

  return (
    <div className="container mx-auto">
      <IntroSection />
      <SpecialtySkills />
      <RecentProjects projects={projects} />
    </div>
  );
}

export const revalidate = 60;
