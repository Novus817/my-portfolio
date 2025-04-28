import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

type Props = {
  content: PortableTextBlock[] | undefined;
};

export default async function AboutPage({ content }: Props) {
  return (
    <>
      <div className="about-img-wrap">
        <Image
          src="/abc-headshot.jpeg"
          width={640}
          height={360}
          className="about-img"
          alt="Me at work"
        />
      </div>
      <div className="content-section">
        <PortableText value={content} />
      </div>
    </>
  );
}
