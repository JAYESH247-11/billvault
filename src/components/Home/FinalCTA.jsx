import { Link } from 'react-router-dom';

const FinalCTA = () => (
  <section className="home-final-cta" id="final-cta" aria-labelledby="final-cta-title">
    <div className="home-content home-final-cta__content">
      <p className="home-eyebrow">Billvault</p>
      <h2 id="final-cta-title">Ready to simplify your daily billing?</h2>
      <p>
        Start with a 15-day free trial and manage invoices, customers, products, inventory and
        payments from one place.
      </p>
      <div className="home-final-cta__actions">
        <a className="home-button home-button--primary" href="#free-trial">
          Start Free Trial
        </a>
        <Link className="home-button home-button--dark-secondary" to="/contact">
          Contact us
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;
