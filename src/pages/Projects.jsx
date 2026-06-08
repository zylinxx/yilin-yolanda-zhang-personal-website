import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { filters, projects } from '../data/projects.js';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const normalizedCategory = categoryParam === 'Visual' ? 'Graphics' : categoryParam;
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
      <div className="page-heading">
        <span>Projects</span>
        <h1 className="projects-heading-title">
          Selected work across architecture, photography, visualization, and AI studies.
        </h1>
      </div>

      <div className="filter-row" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'is-active' : ''}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

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
    </section>
  );
}
