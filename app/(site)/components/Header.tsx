import Link from 'next/link';
import Nav from './Nav';

export default async function Header() {
  return (
    <header className="header-section">
      <Link href="/" className="logo-link">
        Anthony Marrello | Portfolio
      </Link>
      <Nav />
    </header>
  );
}
