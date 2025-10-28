export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p>&copy; {currentYear} Anthony Marrello. All rights reserved.</p>
    </>
  );
}
