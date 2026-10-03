import { Building2, Mail, MapPin, MessageCircle } from 'lucide-react';
import usePageMetadata from '../../hooks/usePageMetadata';
import './ContactPage.css';

const ContactPage = () => {
  usePageMetadata({
    title: 'Contact Billvault | Billing Software Support',
    description: 'Contact Billvault for purchases, licence keys, renewals or support.',
  });

  return (
    <div className="contact-page">
      <section aria-labelledby="contact-title" className="contact-hero">
        <div className="contact-container">
          <h1 id="contact-title">Contact us</h1>
          <p className="contact-hero__description">
            For purchases, licence keys, renewals or support, write to us. We reply within 2 working
            days.
          </p>
        </div>
      </section>

      <section aria-label="Billvault contact information" className="contact-details">
        <div className="contact-container contact-details__grid">
          <section aria-labelledby="contact-business-title" className="contact-card contact-business">
            <div aria-hidden="true" className="contact-card__icon">
              <Building2 />
            </div>
            <h2 id="contact-business-title">Business information</h2>
            <dl className="contact-business__details">
              <div>
                <dt>Business</dt>
                <dd>Billvault</dd>
              </div>
              <div>
                <dt>Owner</dt>
                <dd>Jayeshkumar Baraiya</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>
                  <MapPin aria-hidden="true" />
                  Bhavnagar, Gujarat, India
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="contact-options-title" className="contact-options">
            <h2 id="contact-options-title">Get in touch</h2>
            <div className="contact-options__grid">
              <article className="contact-card contact-method">
                <div aria-hidden="true" className="contact-card__icon">
                  <Mail />
                </div>
                <h3>Email</h3>
                <a
                  className="contact-action"
                  href="mailto:jayeshkumarbaraiya247@gmail.com"
                >
                  jayeshkumarbaraiya247@gmail.com
                </a>
              </article>

              <article className="contact-card contact-method">
                <div aria-hidden="true" className="contact-card__icon">
                  <MessageCircle />
                </div>
                <h3>WhatsApp</h3>
                <a
                  className="contact-action"
                  href="https://wa.me/919265504108"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +91 92655 04108
                </a>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
