import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anthony Marrello | Portfolio | Not Found',
  description: 'The requested page was not found.',
  openGraph: {
    title: 'Page Not Found',
    description: 'The requested page was not found.',
    images: [{ url: '/default-og-image.png', alt: 'Not Found' }],
    url: 'https://anthonymarrello.com/404',
    type: 'website',
  },
};

export default function Custom404() {
  return (
    <div className="not-found-wrap">
      <h2 className="not-found-title">There was a problem.</h2>
      <p>The page you requested does not exist.</p>
      <p>
        Go back to the{' '}
        <Link href="/" className="homepage-link">
          Homepage
        </Link>
      </p>
    </div>
  );
}
