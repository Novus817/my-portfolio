import IntroSection from './components/IntroSection';
import SpecialtySkills from './components/SpecialtySkills';
import RecentProjects from './components/RecentProjects';

type Props = {
  params: { slug: string; title: string; project: string };
};

export default async function Home({ params }: Props) {
  return (
    <div className="container mx-auto">
      <IntroSection />
      <SpecialtySkills />
      <RecentProjects />
    </div>
  );
}
