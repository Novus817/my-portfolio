import { getHomePage, getProjects, urlFor } from '@/sanity/sanity-utils';
import IntroSection from './components/IntroSection';
import SpecialtySkills from './components/SpecialtySkills';
import RecentProjects from './components/RecentProjects';

export async function generateMetadata() {
  const projects = await getProjects(1);
  const heroImage = projects[0]?.image
    ? urlFor(projects[0].image).url()
    : '/default-og-image.png';

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
  const [homePage, projects] = await Promise.all([getHomePage(), getProjects(3)]);

  return (
    <>
      <IntroSection intro={homePage?.intro} />
      <SpecialtySkills />
      <RecentProjects projects={projects} />
    </>
  );
}

export const revalidate = 60;
