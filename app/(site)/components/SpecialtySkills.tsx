import Link from 'next/link';
import {
  FaLinkedin,
  FaGithub,
  FaNode,
  FaEnvelope,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaCircleInfo,
  FaCode,
} from 'react-icons/fa6';

export default function SpecialtySkills() {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Full-Stack Developer</h2>

      <div className="info-wrap">
        <div className="social">
          <Link
            href="https://www.linkedin.com/in/anthony-marrello-255a2813/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Linkedin profile link"
          >
            <FaLinkedin className="social-link-icon mr-2" />{' '}
          </Link>
          <Link
            href="https://github.com/novus817"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Github profile link"
          >
            <FaGithub className="social-link-icon ml-2" />
          </Link>
        </div>
        <div className="skills">
          <span className="skills-intro">Specialty Skills Include:</span>
          <span className="skills-main">
            <FaHtml5 className="specialty-icon" />{' '}
            <FaCss3Alt className="specialty-icon" />{' '}
            <FaJs className="specialty-icon" />{' '}
            <FaReact className="specialty-icon" />{' '}
            <FaNode className="specialty-icon" />
          </span>
        </div>
      </div>

      <div className="icon-links">
        <Link
          href="/work"
          className="icon-link"
          aria-label="Link to my projects page"
        >
          <FaCode className="nav-icon" />
          my work
        </Link>

        <Link
          href="/about"
          className="icon-link"
          aria-label="Link to about me page"
        >
          <FaCircleInfo className="nav-icon" />
          about me
        </Link>

        <Link
          href="/contact"
          className="icon-link"
          aria-label="Link to my contact page"
        >
          <FaEnvelope className="nav-icon" />
          contact me
        </Link>
      </div>
    </div>
  );
}
