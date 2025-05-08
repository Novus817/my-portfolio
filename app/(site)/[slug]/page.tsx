import { getPage, getProjects, urlFor } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

type Props = {
  params: { slug: string; title?: string };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params.slug);
  const projects = params.slug === 'work' ? await getProjects(1) : null; // Optional: for work page image
  const ogImage = projects?.[0]?.image
    ? urlFor(projects[0].image).url()
    : '/default-og-image.png'; // Fallback image

  if (!page) {
    return {
      title: 'Anthony Marrello Portfolio | Not Found',
      description: 'Page not found',
    };
  }

  return {
    title: `Anthony Marrello | Portfolio | ${page.title}`,
    description: `My portfolio page for ${page.title}`,
    openGraph: {
      title: `Anthony Marrello | Portfolio | ${page.title}`,
      description: `Explore my portfolio page for ${page.title}.`,
      images: [{ url: ogImage, alt: page.title }],
      url: `https://anthonymarrello.com/${page.slug}`, // Replace with your domain
      type: 'website',
    },
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
