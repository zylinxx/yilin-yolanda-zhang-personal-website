import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';
import { getAdjacentProjects, getProjectBySlug, smallImage } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [openImage, setOpenImage] = useState(null);
  const [ratios, setRatios] = useState({});

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  // The cover is shown on the index pages, so don't open the detail page with it again.
  const images = project.images
    .filter((image, index) => !(index === 0 && image.src === project.cover))
    .map((image) => ({
      ...image,
      alt: image.caption ? `${project.title}: ${image.caption}` : image.alt,
    }));
  // Consecutive `pair` images share a row; everything else gets its own row.
  const rows = [];
  images.forEach((image, index) => {
    if (image.pair && images[index + 1]?.pair && rows.at(-1)?.at(-1) !== index) {
      rows.push([index, index + 1]);
    } else if (rows.at(-1)?.at(-1) !== index) {
      rows.push([index]);
    }
  });

  // In a pair, each figure grows by its image's aspect ratio so both images end up the same height.
  const renderFigure = (index) => {
    const image = images[index];
    const ratio = ratios[image.src] ?? 4 / 3;
    return (
      <figure key={image.src} style={image.pair ? { flexGrow: ratio } : undefined}>
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
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget;
              if (naturalHeight) {
                setRatios((current) => ({ ...current, [image.src]: naturalWidth / naturalHeight }));
              }
            }}
          />
        </button>
        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    );
  };

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
          {rows.map((row) =>
            row.length === 2 ? (
              <div key={images[row[0]].src} className="detail-image-pair">
                {row.map(renderFigure)}
              </div>
            ) : (
              renderFigure(row[0])
            ),
          )}
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
