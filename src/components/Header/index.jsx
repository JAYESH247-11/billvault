import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import brandMark from '../../assets/home/brand-mark.svg';
import menuIcon from '../../assets/home/menu.svg';
import { navItems } from '../../data/navigation';

const navLinkClasses = ({ isActive }) =>
  [
    'inline-flex items-center rounded-sm px-2 py-1 text-sm font-medium transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]',
    isActive
      ? 'border-b-2 border-[#9B1C2E] text-[#9B1C2E] underline underline-offset-4'
      : 'text-[#14213D] hover:text-[#9B1C2E]',
  ].join(' ');

const homeNavItems = [
  { label: 'Home', to: '/' },
  { label: 'Download', to: '/download' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isDownload = pathname === '/download';
  const showTrialLink = isHome || isDownload;
  const trialHref = isHome
    ? '#free-trial'
    : `${import.meta.env.BASE_URL}#free-trial`;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const renderHomeLink = (item) => {
    if (item.href) {
      return (
        <a className="site-nav__link" href={item.href} key={item.label} onClick={closeMenu}>
          {item.label}
        </a>
      );
    }

    const isActive = pathname === item.to;

    return (
      <Link
        aria-current={isActive ? 'page' : undefined}
        className={`site-nav__link${isActive ? ' is-active' : ''}`}
        key={item.label}
        onClick={closeMenu}
        to={item.to}
      >
        {item.label}
      </Link>
    );
  };

  const renderGlobalLink = (item) => (
    <NavLink
      className={({ isActive }) =>
        ['site-nav__link', navLinkClasses({ isActive })].join(' ')
      }
      key={item.to}
      onClick={closeMenu}
      to={item.to}
    >
      {item.label}
    </NavLink>
  );

  return (
    <header
      className={`site-header${isHome ? ' site-header--home' : ''}${isDownload ? ' site-header--download' : ''}`}
    >
      <div className="site-header__inner">
        <Link aria-label="Billvault home" className="site-brand" onClick={closeMenu} to="/">
          <span className="site-brand__mark">
            <img alt="" src={brandMark} />
          </span>
          <span>Billvault</span>
        </Link>

        <nav aria-label="Main navigation" className="site-nav site-nav--desktop">
          {isHome ? homeNavItems.map(renderHomeLink) : navItems.map(renderGlobalLink)}
          {showTrialLink ? (
            <a className="site-header__trial" href={trialHref} onClick={closeMenu}>
              Start Free Trial
            </a>
          ) : null}
        </nav>

        <button
          aria-controls="site-mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="site-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <img alt="" src={menuIcon} />
        </button>
        {showTrialLink ? (
          <a className="site-header__trial site-header__trial--compact" href={trialHref} onClick={closeMenu}>
            Start Free Trial
          </a>
        ) : null}
      </div>
      <nav
        aria-label="Mobile navigation"
        className="site-mobile-nav"
        hidden={!menuOpen}
        id="site-mobile-navigation"
      >
        {isHome ? homeNavItems.map(renderHomeLink) : navItems.map(renderGlobalLink)}
        {showTrialLink ? (
          <a className="site-header__trial" href={trialHref} onClick={closeMenu}>
            Start Free Trial
          </a>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
