import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';
import { filters, projects, smallImage } from '../data/projects.js';

const featuredProjects = projects.filter((project) => project.featured);
const openingProjects = featuredProjects.slice(0, 3);

// The opening sequence plays once per page load, not on every return to Home.
let introHasPlayed = false;

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [skipIntro] = useState(() => introHasPlayed);
  const reduceMotion = prefersReducedMotion || skipIntro;

  useEffect(() => {
    introHasPlayed = true;
  }, []);

  // Drafting-line opening: hairlines draw each frame, the images fill in, then the name rises.
  const timing = (duration, delay, ease) => (
    reduceMotion ? { duration: 0 } : { duration, delay, ease }
  );
  const drawEase = [0.65, 0, 0.35, 1];
  const revealEase = [0.16, 1, 0.3, 1];
  const frameEdges = [
    { edge: 'top', axis: 'scaleX', delay: 0 },
    { edge: 'right', axis: 'scaleY', delay: 0.12 },
    { edge: 'bottom', axis: 'scaleX', delay: 0.06 },
    { edge: 'left', axis: 'scaleY', delay: 0.18 },
  ];

  return (
    <section className="home-index" aria-labelledby="portfolio-name">
      <section className="opening-sequence" aria-label="Selected project opening">
        <div className="opening-contact-sheet">
          {openingProjects.map((project, index) => (
            <figure key={project.slug} className={`opening-image opening-image--${index + 1}`}>
              <motion.div
                className="opening-image-reveal"
                initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={timing(0.7, 0.45 + (index * 0.1), revealEase)}
              >
                <Link to={`/projects/${project.slug}`} className="opening-image-link">
                  <img
                    src={smallImage(project.cover)}
                    alt={project.title}
                    loading="eager"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    width="1600"
                    height="1200"
                  />
                  <figcaption>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{project.title}</span>
                  </figcaption>
                </Link>
              </motion.div>
              {frameEdges.map(({ edge, axis, delay }) => (
                <motion.span
                  key={edge}
                  aria-hidden="true"
                  className={`draft-line draft-line--${edge}`}
                  initial={reduceMotion ? false : { [axis]: 0 }}
                  animate={{ [axis]: 1 }}
                  transition={timing(0.5, (index * 0.08) + delay, drawEase)}
                />
              ))}
            </figure>
          ))}
          <motion.div
            className="opening-register"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={timing(0.4, 1)}
          >
            <span>Portfolio / 2026</span>
            <span>{filters.slice(1).join(' · ')}</span>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="identity-block"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={timing(0.6, 0.8, revealEase)}
      >
        <h1 id="portfolio-name">
          <span>{profile.name}</span>
          <span>{profile.surname}</span>
        </h1>
        <div className="identity-copy">
          <p>{profile.intro}</p>
          <p>{profile.location}</p>
          <Link to="/about" className="text-link">
            About me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>

      <section className="home-work-gallery" aria-label="Selected work">
        <header className="gallery-utility">
          <Link to="/projects" className="text-link">
            Full archive <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className="gallery-results">
          <p className="gallery-status">Selected work</p>
          <div className="home-gallery-grid">
            {featuredProjects.map((project) => (
              <article key={project.slug}>
                <Link to={`/projects/${project.slug}`} className="home-gallery-link">
                  <figure className="home-gallery-media">
                    <img
                      src={smallImage(project.cover)}
                      alt=""
                      loading="lazy"
                      width="1600"
                      height="1200"
                    />
                  </figure>
                  <div className="home-gallery-caption">
                    <h3>{project.title}</h3>
                    <span>{project.category} · {project.year}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
