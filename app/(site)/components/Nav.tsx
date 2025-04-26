import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export default async function IntroSection() {
  const pages = await getPages();

  return (
    <nav className="main-nav">
      {pages.reverse().map((page) => (
        <Link key={page._id} href={`/${page.slug}`} className="nav-link">
          {page.title}
        </Link>
      ))}
    </nav>
  );
}
