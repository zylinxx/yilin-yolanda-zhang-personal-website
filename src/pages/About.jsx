import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section className="about-page">
      <div className="page-heading about-heading">
        <span>About</span>
        <h1>{profile.location}</h1>
      </div>

      <div className="about-grid">
        <section className="about-bio">
          <h2>Bio</h2>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          <ul className="experience-list">
            {profile.experience.map((item) => (
              <li key={item.title}>
                <span className="experience-title">{item.title}</span>
                <span className="experience-place">{item.place}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skill-list">
            {profile.skillGroups.map((group) => (
              <div className="skill-group" key={group.title} tabIndex="0">
                <h3>{group.title}</h3>
                {group.items.length > 0 && (
                  <ul className="skill-items">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
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
          <span>{profile.instagram}</span>
        </section>
      </div>
    </section>
  );
}
