import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="contact-wrap">
      <h2 className="contact-title">How can I help?</h2>
      <Link href="mailto:apm817@gmail.com" className="contact-link">
        <FaEnvelope className="contact-icon" />
      </Link>
      <Image
        src="/dev-graphic.svg"
        width={424}
        height={334}
        className="contact-img"
        alt="coding dev illustration"
      />
    </div>
  );
}
