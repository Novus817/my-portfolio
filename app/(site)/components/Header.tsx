import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export default async function Header() {
  const pages = await getPages();

  return (
    <header className="flex items-center justify-between flex-col sm:flex-row sm:mb-5">
      <Link
        href="/"
        className="mb-4 sm:mb-0 bg-gradient-to-r from-orange-800 to-orange-600 via-orange-700 bg-clip-text text-transparent text-xl font-bold"
      >
        Anthony Marrello | Portfolio
      </Link>

      <div className="flex items-center gap-5 text-orange-600">
        {pages.reverse().map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="border-b-4 border-transparent hover:border-orange-800 transition"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
