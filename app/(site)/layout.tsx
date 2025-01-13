import '../globals.css';
import Header from './components/Header';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Anthony Marrello | Portfolio',
  description:
    'My portfolio project display. Portfolio created with React/Next.js/TypeScript + Sanity.io',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="max-w-4xl mx-auto p-4 sm:px-6 lg:px-0">
        <Header />
        <main className="py-5 small:py-10 flex h-screen">{children}</main>
      </body>
    </html>
  );
}
