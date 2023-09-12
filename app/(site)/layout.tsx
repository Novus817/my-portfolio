import '../globals.css';
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Anthony Marrello | Portfolio',
  description:
    'My portfolio project display. Portfolio created with React/Next.js + Sanity.io',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of our pages
  const pages = await getPages();

  return (
    <html lang="en" className={roboto.className}>
      <body className="max-w-4xl mx-auto p-4 sm:px-6 lg:px-0">
        <header className="flex items-center justify-between flex-col sm:flex-row sm:mb-5">
          <Link
            href="/"
            className="mb-4 sm:mb-0 bg-gradient-to-r from-orange-800 to-orange-600 via-orange-700 bg-clip-text text-transparent text-xl font-bold"
          >
            Anthony Marrello | Portfolio
          </Link>

          <div className="flex items-center gap-5 text-orange-600">
            {pages.reverse().map(page => (
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

        <main className="py-5 small:py-10">{children}</main>
      </body>
    </html>
  );
}
