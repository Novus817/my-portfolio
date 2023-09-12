import '../globals.css';

export const metadata = {
  title: 'Anthony Marrello | Portfolio | Back end CMS in Sanity Studio',
  description:
    'The back end CMS to my portfolio which is in Sanity Studio and built with React/Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
