import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section className="about-page">
      <header className="profile-heading">
        <h1>{profile.name} {profile.surname}</h1>
        <p>{profile.location}</p>
      </header>

      <div className="about-grid">
        <section className="about-bio">
          <h2>Bio</h2>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a href={profile.cvUrl} className="text-link" target="_blank" rel="noreferrer">
            Full CV (PDF) <span aria-hidden="true">→</span>
          </a>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          {profile.phoneNumbers.map((phone) => (
            <a key={phone} href={`tel:${phone.replaceAll(' ', '')}`}>
              {phone}
            </a>
          ))}
          <p className="contact-emails">
            {profile.contactEmails.map((email, index) => (
              <span key={email}>
                <a href={`mailto:${email}`}>{email}</a>
                {index < profile.contactEmails.length - 1 && ' / '}
              </span>
            ))}
          </p>
          <a href={profile.instagramUrl} target="_blank" rel="noreferrer">
            {profile.instagram}
          </a>
        </section>
      </div>
    </section>
  );
}
