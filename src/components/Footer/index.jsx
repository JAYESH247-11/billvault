import { Mail, MessageCircleMore } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import brandMark from '../../assets/home/brand-mark.svg';
import { navItems } from '../../data/navigation';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`site-footer ${className}`.trim()}>
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <NavLink aria-label="Billvault home" className="site-brand" to="/">
            <span className="site-brand__mark">
              <img alt="" src={brandMark} />
            </span>
            <span>Billvault</span>
          </NavLink>
          <p>Billing and invoicing software for Indian businesses.</p>
        </div>

        <div className="site-footer__group">
          <h2>Navigation</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__group">
          <h2>Business</h2>
          <ul>
            <li>Billvault</li>
            <li>Owner: Jayeshkumar Baraiya</li>
            <li>Bhavnagar, Gujarat, India</li>
          </ul>
        </div>

        <div className="site-footer__group">
          <h2>Contact</h2>
          <ul>
            <li>
              <Mail aria-hidden="true" />
              <a href="mailto:jayeshkumarbaraiya247@gmail.com">
                jayeshkumarbaraiya247@gmail.com
              </a>
            </li>
            <li>
              <MessageCircleMore aria-hidden="true" />
              <a href="https://wa.me/919265504108" rel="noreferrer" target="_blank">
                +91 92655 04108
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__copyright">
        © 2026 Billvault, Bhavnagar, Gujarat, India. Owner: Jayeshkumar Baraiya.
      </div>
    </footer>
  );
};

export default Footer;
