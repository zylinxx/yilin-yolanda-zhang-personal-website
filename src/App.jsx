import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import SiteNav from './components/SiteNav.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Projects from './pages/Projects.jsx';

const pageMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
};

function PageShell({ children }) {
  return (
    <motion.main className="page-shell" {...pageMotion}>
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="site">
      <SiteNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageShell>
                <Home />
              </PageShell>
            }
          />
          <Route
            path="/projects"
            element={
              <PageShell>
                <Projects />
              </PageShell>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageShell>
                <ProjectDetail />
              </PageShell>
            }
          />
          <Route
            path="/about"
            element={
              <PageShell>
                <About />
              </PageShell>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
