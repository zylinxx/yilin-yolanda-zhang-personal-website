import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import SiteNav from './components/SiteNav.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Projects from './pages/Projects.jsx';

function PageShell({ children }) {
  return (
    <main className="page-shell">
      {children}
    </main>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    // The next page may mount a few frames later (AnimatePresence waits), so look for the anchor until it exists.
    let attempts = 0;
    let timer = setTimeout(function findTarget() {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: 'instant' });
      } else if (attempts++ < 30) {
        timer = setTimeout(findTarget, 16);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <div className="site" id="top">
        <ScrollToTop />
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
    </MotionConfig>
  );
}
