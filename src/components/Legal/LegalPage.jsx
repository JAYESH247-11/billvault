import './LegalPage.css';

const LegalContact = ({ contact }) => (
  <dl className="legal-contact">
    <div>
      <dt>Owner:</dt>
      <dd>{contact.owner}</dd>
    </div>
    <div>
      <dt>Email:</dt>
      <dd>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </dd>
    </div>
    <div>
      <dt>Location:</dt>
      <dd>{contact.location}</dd>
    </div>
  </dl>
);

const LegalPage = ({ content }) => (
  <article aria-labelledby="legal-title" className="legal-page">
    <header className="legal-page__header">
      <h1 id="legal-title">{content.title}</h1>
      <p className="legal-page__effective-date">
        <span>Effective Date:</span> {content.effectiveDate}
      </p>
    </header>
    <div className="legal-page__sections">
      {content.sections.map(({ heading, introduction, bullets, paragraphs, contact }, index) => (
        <section
          aria-labelledby={`legal-section-${index + 1}`}
          className="legal-page__section"
          key={heading}
        >
          <h2 id={`legal-section-${index + 1}`}>{heading}</h2>
          {introduction ? <p>{introduction}</p> : null}
          {bullets ? (
            <ul>
              {bullets.map(({ label, text }) => (
                <li key={`${label ?? ''}${text}`}>
                  {label ? <strong>{label}</strong> : null}
                  {text}
                </li>
              ))}
            </ul>
          ) : null}
          {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {contact ? <LegalContact contact={contact} /> : null}
        </section>
      ))}
    </div>
  </article>
);

export default LegalPage;
