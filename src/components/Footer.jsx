import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link to="/about">{profile.name}</Link>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span>{profile.instagram}</span>
    </footer>
  );
}
