import { getPage, getProjects, urlFor } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const page = await getPage(slug);
  const projects = slug === 'work' ? await getProjects(1) : null;
  const ogImage = projects?.[0]?.image
    ? urlFor(projects[0].image).url()
    : '/default-og-image.png';

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
      url: `https://anthonymarrello.com/${page.slug}`,
      type: 'website',
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) {
    return notFound();
  }

  const projects = page.slug === 'work' ? await getProjects() : null;

  if (page.slug === 'work') {
    return (
      <section className="page-shell">
        <h1 className="page-title">{page.title}</h1>
        <WorkPage content={page.content} projects={projects} />
      </section>
    );
  }

  return (
    <div className="content-section">
      <h1 className="page-title">{page.title}</h1>
      {page.slug === 'about' && <AboutPage content={page.content} />}
      {page.slug === 'contact' && <ContactPage content={page.content} />}
    </div>
  );
}

export const revalidate = 60;
