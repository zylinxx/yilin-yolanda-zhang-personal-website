import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="foot-letter__close">
        From {profile.name.split('/')[0]},<br />
        <span>A growing archive, 2026.</span>
      </p>
      <div className="foot-letter__links">
        <Link to="/about">About</Link>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.instagramUrl} target="_blank" rel="noreferrer">{profile.instagram}</a>
      </div>
      <a href="#top" className="back-to-top">Top ↑</a>
    </footer>
  );
}
