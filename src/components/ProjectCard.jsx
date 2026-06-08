import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article className={featured ? 'project-card featured-card' : 'project-card'} layout>
      <Link to={`/projects/${project.slug}`} className="project-link">
        <div className="project-media">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className={project.coverClassName}
          />
          {featured && (
            <div className="featured-overlay">
              <span>{project.title}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
              <p>{project.summary}</p>
            </div>
          )}
        </div>
        {!featured && (
          <div className="project-meta">
            <h3>{project.title}</h3>
            <div>
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
            <p>{project.summary}</p>
          </div>
        )}
      </Link>
    </motion.article>
  );
}
