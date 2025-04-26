import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export default async function Header() {
  const pages = await getPages();

  return (
    <header className="header-section">
      <Link href="/" className="logo-link">
        Anthony Marrello | Portfolio
      </Link>

      <div className="main-nav">
        {pages.reverse().map((page) => (
          <Link key={page._id} href={`/${page.slug}`} className="nav-link">
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
