import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="about-img-wrap">
      <Image
        src="/abc-headshot.jpeg"
        width={640}
        height={360}
        className="about-img"
        alt="Me at work"
      />
    </div>
  );
}
