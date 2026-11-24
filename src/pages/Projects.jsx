import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { filters, projects, smallImage, visualWorks } from '../data/projects.js';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openVisual, setOpenVisual] = useState(null);
  const categoryParam = searchParams.get('category');
  const renamedCategories = {
    Editorial: 'Content',
    Archive: 'Product',
    Visual: 'Graphic',
  };
  const normalizedCategory = renamedCategories[categoryParam] ?? categoryParam;
  const activeFilter = filters.includes(normalizedCategory) ? normalizedCategory : 'All';

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  function handleFilterChange(filter) {
    setSearchParams(filter === 'All' ? {} : { category: filter });
  }

  return (
    <section className="projects-page">
      <header className="archive-heading">
        <div>
          <h1>Archive</h1>
          <p className="projects-heading-title">
            Architecture, products, photography, graphics, and content studies.
          </p>
        </div>
      </header>

      {/* Filters only help once there is more than one category of work. */}
      {filters.length > 2 && (
        <div className="filter-row" aria-label="Project categories">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'is-active' : ''}
              aria-pressed={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.24 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {activeFilter === 'Graphic' && (
        <div className="visual-grid">
          {visualWorks.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="visual-tile"
              onClick={() => setOpenVisual(index)}
              aria-label={`Enlarge ${image.alt}`}
            >
              <img src={smallImage(image.src)} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={visualWorks}
        index={openVisual}
        onChange={setOpenVisual}
        onClose={() => setOpenVisual(null)}
      />
    </section>
  );
}
