import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';
import { getAdjacentProjects, getProjectBySlug, smallImage } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [openImage, setOpenImage] = useState(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const images = project.images.map((image) => ({
    ...image,
    alt: image.caption ? `${project.title}: ${image.caption}` : image.alt,
  }));
  const facts = [
    ['Year', project.year],
    ['Type', project.role],
    ['Instructor', project.instructor],
    ['Tools', project.tools.join(', ')],
  ].filter(([, value]) => value);

  return (
    <article className="project-detail">
      <div className="project-detail-header">
        <Link to="/projects" className="text-link detail-back-link">
          <span aria-hidden="true">←</span> Archive
        </Link>
        <div className="detail-title-row">
          <h1>{project.title}</h1>
        </div>
        <p className="detail-summary">{project.summary}</p>
        <dl className="detail-facts">
          <div>
            <dt>Category</dt>
            <dd>
              <Link
                to={`/projects?category=${encodeURIComponent(project.category)}`}
                className="detail-category-tag"
              >
                {project.category}
              </Link>
            </dd>
          </div>
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="detail-body">
        <div className="detail-copy">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="detail-images">
          {images.map((image, index) => (
            <figure key={image.src}>
              <button
                type="button"
                className="detail-image-button"
                onClick={() => setOpenImage(index)}
                aria-label={`Enlarge image ${index + 1}${image.caption ? `: ${image.caption}` : ''}`}
              >
                <img
                  src={smallImage(image.src)}
                  srcSet={image.src.endsWith('.webp') ? `${smallImage(image.src)} 1200w, ${image.src} 2400w` : undefined}
                  sizes="(min-width: 60rem) 60vw, 100vw"
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width="1600"
                  height="1200"
                  className={image.className}
                />
              </button>
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>

      <nav className="project-pager" aria-label="Adjacent projects">
        <Link to={`/projects/${previous.slug}`}>
          <span className="pager-direction">← Previous</span>
          <span className="pager-title">{previous.title}</span>
        </Link>
        <Link to={`/projects/${next.slug}`}>
          <span className="pager-direction">Next →</span>
          <span className="pager-title">{next.title}</span>
        </Link>
      </nav>

      <Lightbox
        images={images}
        index={openImage}
        onChange={setOpenImage}
        onClose={() => setOpenImage(null)}
      />
    </article>
  );
}
