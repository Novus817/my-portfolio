import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export default async function Nav() {
  const pages = await getPages();

  return (
    <nav className="main-nav" aria-label="Main navigation">
      {pages
        .slice()
        .reverse()
        .map((page) => (
          <Link key={page._id} href={`/${page.slug}`} className="nav-link">
            {page.title}
          </Link>
        ))}
    </nav>
  );
}
