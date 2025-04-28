import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

type Props = {
  params: { slug: string; title: string };
};

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params.slug);

  return {
    title: `Anthony Marrello | Portfolio | ${page?.title}`,
    description: `My portfolio page for ${page?.title}`,
  };
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  if (!page) {
    return notFound();
  }

  return (
    <div>
      <h1 className="page-title">{page?.title}</h1>

      {page?.slug === 'about' && <AboutPage />}

      {page?.slug === 'contact' && <ContactPage />}

      <div className="content-section">
        <PortableText value={page?.content} />
      </div>

      {page?.slug === 'work' && <WorkPage />}
    </div>
  );
}
