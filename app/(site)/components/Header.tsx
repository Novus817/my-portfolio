import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="header-section">
      <Link href="/" className="logo-link" aria-label="Anthony Marrello home">
        Anthony Marrello
      </Link>

      <Nav />
    </header>
  );
}
