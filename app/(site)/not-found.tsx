import Link from 'next/link';

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
