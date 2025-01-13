import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center mx-auto my-8">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>The page you requested does not exist.</p>
      <p>
        Go back to the{' '}
        <Link
          href="/"
          className="text-orange-600 border-b-4 border-transparent hover:border-orange-800 transition"
        >
          Homepage
        </Link>
      </p>
    </div>
  );
}
