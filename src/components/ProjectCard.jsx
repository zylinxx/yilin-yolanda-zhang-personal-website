import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { smallImage } from '../data/projects.js';

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article className={featured ? 'project-card featured-card' : 'project-card'} layout="position">
      <Link to={`/projects/${project.slug}`} className="project-link">
        <div className="project-media">
          <img
            src={smallImage(project.cover)}
            alt={project.title}
            loading="lazy"
            width="1600"
            height="1200"
            className={project.coverClassName}
          />
        </div>
        <div className="project-meta">
          <div className="project-data">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h2>
            {project.title}
            <span aria-hidden="true">↗</span>
          </h2>
          <p>{project.summary}</p>
        </div>
      </Link>
    </motion.article>
  );
}
