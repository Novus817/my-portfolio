import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

type Props = {
  content: PortableTextBlock[] | undefined;
};

export default async function ContactPage({ content }: Props) {
  return (
    <div className="contact-wrap">
      {content && <PortableText value={content} />}
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
