import '../globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
  openGraph: {
    title: 'Anthony Marrello | Portfolio',
    description: 'My portfolio showcasing web development projects.',
    images: [{ url: '/default-og-image.png', alt: 'Anthony Marrello Portfolio' }],
    url: 'https://anthonymarrello.com',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <main className="main-section">{children}</main>
      </body>
    </html>
  );
}
