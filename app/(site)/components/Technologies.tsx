import { FaNode, FaReact } from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const technologies = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'React',
    icon: FaReact,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'Node.js',
    icon: FaNode,
  },
];

export default function Technologies() {
  return (
    <section className="technologies-section">
      <div className="technologies-heading">
        <p className="technologies-eyebrow">Technologies</p>

        <h2 className="technologies-title">
          Tools for building modern web applications
        </h2>

        <p className="technologies-description">
          A focused set of technologies I use to create maintainable, full-stack
          web experiences.
        </p>
      </div>

      <ul className="technologies-grid">
        {technologies.map(({ name, icon: Icon }) => (
          <li key={name} className="technology-item">
            <Icon className="technology-icon" aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
