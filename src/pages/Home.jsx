import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-label="Portfolio introduction">
        <img src="/images/hero-archive.svg" alt="Archive style portfolio hero composition." />
        <h1>{profile.name}</h1>
        <span className="home-hero-surname">{profile.surname}</span>
      </section>

      <section className="intro-section">
        <p>{profile.intro}</p>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Featured Projects</span>
        </div>
        <motion.div
          className="featured-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
