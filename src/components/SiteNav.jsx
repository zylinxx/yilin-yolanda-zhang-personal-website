import { NavLink } from 'react-router-dom';

export default function SiteNav() {
  return (
    <header className="site-header">
      <NavLink to="/" className="home-link">
        Home
      </NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
