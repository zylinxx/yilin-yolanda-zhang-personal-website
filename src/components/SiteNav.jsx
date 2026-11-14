import { Link, NavLink, useLocation } from 'react-router-dom';

export default function SiteNav() {
  const { hash } = useLocation();
  const onContact = hash === '#contact';

  return (
    <header className="site-header">
      <NavLink to="/" className="home-link" aria-label="Yilin Yolanda Zhang, home">
        <span className="wordmark wordmark-full">Y/Z</span>
        <span className="wordmark wordmark-compact" aria-hidden="true">Y/Z</span>
      </NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/projects">Archive</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive && !onContact ? 'active' : '')}>
          About
        </NavLink>
        <Link to="/about#contact" className={onContact ? 'active' : ''}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
