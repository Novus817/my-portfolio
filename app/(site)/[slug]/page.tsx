import { getPage, getProjects } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

type Props = {
  params: { slug: string; title?: string };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params.slug);

  if (!page) {
    return {
      title: 'Anthony Marrello Portfolio | Not Found',
      description: 'Page not found',
    };
  }

  return {
    title: `Anthony Marrello | Portfolio | ${page.title}`,
    description: `My portfolio page for ${page.title}`,
  };
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  if (!page) {
    return notFound();
  }

  // Fetch projects only if the slug is 'work'
  const projects = page.slug === 'work' ? await getProjects() : null;

  return (
    <div>
      <h1 className="page-title">{page.title}</h1>

      {page?.slug === 'about' && <AboutPage content={page.content} />}

      {page?.slug === 'contact' && <ContactPage content={page.content} />}

      {page?.slug === 'work' && (
        <WorkPage content={page.content} projects={projects} />
      )}
    </div>
  );
}

export const revalidate = 60;
