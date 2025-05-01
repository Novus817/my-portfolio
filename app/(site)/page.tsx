import { getProjects } from '@/sanity/sanity-utils';
import IntroSection from './components/IntroSection';
import SpecialtySkills from './components/SpecialtySkills';
import RecentProjects from './components/RecentProjects';

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
