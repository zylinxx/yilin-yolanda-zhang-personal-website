import { Link, Navigate, useParams } from 'react-router-dom';
import { getAdjacentProjects, getProjectBySlug } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="project-detail">
      <div className="project-detail-header">
        <Link to="/projects" className="text-link detail-back-link">
          Back
        </Link>
        <div className="detail-title-row">
          <h1>{project.title}</h1>
          <span>{project.year}</span>
        </div>
        <div className="detail-meta">
          <Link
            to={`/projects?category=${encodeURIComponent(project.category)}`}
            className="detail-category-tag"
          >
            #{project.category}
          </Link>
          <span>{project.role}</span>
          <span>{project.tools.join(' / ')}</span>
          {project.instructor && <span>Instructor: {project.instructor}</span>}
        </div>
        <p className="detail-summary">{project.summary}</p>
      </div>

      <div className="detail-body">
        <div className="detail-copy">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="detail-images">
          {project.images.map((image) => (
            <figure key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={image.className}
              />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>

      <nav className="project-pager" aria-label="Adjacent projects">
        <Link to={`/projects/${previous.slug}`}>
          <span className="pager-direction">Previous</span> / {previous.title}
        </Link>
        <Link to={`/projects/${next.slug}`}>
          <span className="pager-direction">Next</span> / {next.title}
        </Link>
      </nav>
    </article>
  );
}
