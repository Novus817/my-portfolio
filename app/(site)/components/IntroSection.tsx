export default function IntroSection() {
  return (
    <>
      <h1 className="text-center sm:text-left mb-2 sm:mb-5 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide">
        Hello, I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-800 to-orange-600 via-orange-700 bg-clip-text text-transparent">
          Anthony
        </span>
        !
      </h1>

      <p className="text-lg sm:text-xl text-center sm:text-left mb-10 sm:mb-14 tracking-widest">
        Welcome to My Portfolio.
      </p>
    </>
  );
}
