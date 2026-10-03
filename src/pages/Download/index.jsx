import {
  Check,
  Download as DownloadIcon,
  ExternalLink,
  Info,
  Mail,
  MessageCircle,
  Monitor,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import brandMark from '../../assets/home/brand-mark.svg';
import {
  billvaultDownloadUrl,
  installationRequirements,
  installationSteps,
  mongoDbLinks,
} from '../../data/download';
import usePageMetadata from '../../hooks/usePageMetadata';
import './DownloadPage.css';

const ExternalLinkLabel = ({ children, href }) => (
  <a
    aria-label={`${children} (opens in a new tab)`}
    className="download-text-link"
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
    <ExternalLink aria-hidden="true" size={13} strokeWidth={2} />
  </a>
);

const DownloadButton = ({ children, href }) => (
  <a
    aria-label={`${children} (opens in a new tab)`}
    className="download-button download-button--primary"
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <ExternalLink aria-hidden="true" size={14} strokeWidth={2} />
    {children}
  </a>
);

const AppPreview = () => (
  <div aria-hidden="true" className="download-app-preview">
    <div className="download-app-preview__titlebar">
      <span className="download-app-preview__brand">
        <span className="download-app-preview__mark">
          <img alt="" src={brandMark} />
        </span>
        Billvault — Setup Center
      </span>
      <span className="download-app-preview__window-controls">
        <i />
        <i />
        <i />
      </span>
    </div>
    <div className="download-app-preview__body">
      <aside className="download-app-preview__sidebar">
        <strong>BILLVAULT</strong>
        <span className="is-current">Download</span>
        <span>Database</span>
        <span>Setup</span>
      </aside>
      <div className="download-app-preview__workspace">
        <div className="download-app-preview__workspace-heading">
          <div>
            <span>WINDOWS APPLICATION</span>
            <strong>Billvault Desktop</strong>
          </div>
          <span className="download-app-preview__app-icon">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="download-app-preview__installer">
          <div>
            <strong>Billvault for Windows</strong>
            <span>READY</span>
          </div>
          <div>
            <DownloadIcon aria-hidden="true" size={14} />
            Download installer
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DownloadPage = () => {
  usePageMetadata({
    title: 'Download Billvault | Billing Software for Indian Businesses',
    description:
      'Download Billvault for Windows and install the required database tools for your billing and invoicing system.',
  });

  return (
    <div className="download-page">
      <section aria-labelledby="download-title" className="download-hero">
        <div className="download-container download-hero__inner">
          <div className="download-hero__copy">
            <p className="download-badge">
              <Monitor aria-hidden="true" size={14} />
              Windows desktop application
            </p>
            <h1 id="download-title">Download Billvault</h1>
            <p className="download-hero__description">
              Download Billvault for Windows and get the required database tools to set up your
              billing system.
            </p>
            <div className="download-actions">
              <a className="download-button download-button--primary" href="#billvault-download">
                <DownloadIcon aria-hidden="true" size={15} />
                Download Billvault
              </a>
              <Link className="download-button download-button--secondary" to="/contact">
                Contact Support
              </Link>
            </div>
            <p className="download-hero__note">
              <span aria-hidden="true" />
              Billvault Desktop is designed for Windows billing workflows.
            </p>
          </div>
          <AppPreview />
        </div>
      </section>

      <section
        aria-labelledby="billvault-download-title"
        className="download-section download-billvault"
        id="billvault-download"
      >
        <div className="download-container">
          <div className="download-section-heading">
            <p className="download-eyebrow">Billvault Download</p>
            <h2 id="billvault-download-title">Get the Windows application</h2>
            <p>Start with the Billvault installer, then review the database setup tools below.</p>
          </div>
          <article className="billvault-download-card">
            <div className="billvault-download-card__copy">
              <span className="download-tag download-tag--primary">Primary</span>
              <h3>Billvault for Windows</h3>
              <p>
                Install Billvault on your Windows computer to create invoices, manage customers,
                track inventory, record payments and manage your daily billing operations.
              </p>
            </div>
            <div className="billvault-download-card__details">
              <dl className="download-metadata">
                <div>
                  <dt>Platform</dt>
                  <dd>Windows</dd>
                </div>
                <div>
                  <dt>Application</dt>
                  <dd>Billvault Desktop</dd>
                </div>
                <div>
                  <dt>Version</dt>
                  <dd>Not specified</dd>
                </div>
                <div>
                  <dt>File size</dt>
                  <dd>Not specified</dd>
                </div>
              </dl>
              <div className="download-card-actions">
                {billvaultDownloadUrl ? (
                  <a
                    className="download-button download-button--primary"
                    href={billvaultDownloadUrl}
                  >
                    <DownloadIcon aria-hidden="true" size={14} />
                    Download Billvault
                  </a>
                ) : (
                  <button
                    aria-describedby="billvault-download-unavailable"
                    className="download-button download-button--primary"
                    disabled
                    type="button"
                  >
                    <DownloadIcon aria-hidden="true" size={14} />
                    Download Billvault
                  </button>
                )}
                <a className="download-text-link" href="#get-started">
                  Installation Guide
                  <ExternalLink aria-hidden="true" size={13} />
                </a>
              </div>
              {!billvaultDownloadUrl ? (
                <p className="download-unavailable" id="billvault-download-unavailable">
                  The Billvault download link is not currently available.
                </p>
              ) : null}
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="database-setup-title" className="download-section download-database">
        <div className="download-container">
          <div className="download-section-heading">
            <p className="download-eyebrow">Local Data Storage</p>
            <h2 id="database-setup-title">Database Setup</h2>
            <p>
              Billvault uses MongoDB for local application data storage. If MongoDB is not already
              installed on your computer, install the required MongoDB components before using
              Billvault.
            </p>
          </div>
          <div className="database-cards">
            <article className="database-card">
              <span className="download-tag download-tag--required">Required dependency</span>
              <h3>MongoDB Community Server</h3>
              <p>
                MongoDB Community Server provides the local MongoDB database service used by
                Billvault.
              </p>
              <div className="database-card__platform">
                <span>Platform</span>
                <strong>Windows</strong>
              </div>
              <div className="download-card-actions">
                <DownloadButton href={mongoDbLinks.communityDownload}>Download MongoDB</DownloadButton>
                <ExternalLinkLabel href={mongoDbLinks.communityGuide}>
                  Installation Guide
                </ExternalLinkLabel>
              </div>
              <p className="external-destination">
                <ExternalLink aria-hidden="true" size={12} />
                Opens the official MongoDB download page.
              </p>
            </article>

            <article className="database-card database-card--optional">
              <span className="download-tag download-tag--optional">Optional tool</span>
              <h3>MongoDB Compass</h3>
              <p>
                MongoDB Compass is a graphical interface for working with MongoDB databases. It can
                be used to view and manage database collections and data.
              </p>
              <p className="optional-description">
                Useful for viewing and managing data; not required to use Billvault.
              </p>
              <div className="download-card-actions">
                <DownloadButton href={mongoDbLinks.compassDownload}>
                  Download MongoDB Compass
                </DownloadButton>
                <ExternalLinkLabel href={mongoDbLinks.compassDocumentation}>
                  Compass Documentation
                </ExternalLinkLabel>
              </div>
              <p className="external-destination">
                <ExternalLink aria-hidden="true" size={12} />
                Opens the official MongoDB Compass download page.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-label="Installation guidance" className="download-section download-guide">
        <div className="download-container download-guide__grid">
          <section aria-labelledby="requirements-title" className="download-guide__column">
            <div className="download-section-heading">
              <p className="download-eyebrow">Installation Checklist</p>
              <h2 id="requirements-title">Before You Install</h2>
              <p>
                Have these items ready before beginning the setup. Internet access is needed only
                to download the required software.
              </p>
            </div>
            <ul className="download-requirements">
              {installationRequirements.map((requirement) => (
                <li key={requirement}>
                  <span className="download-check">
                    <Check aria-hidden="true" size={12} strokeWidth={2.5} />
                  </span>
                  {requirement}
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="get-started-title"
            className="download-guide__column"
            id="get-started"
          >
            <div className="download-section-heading">
              <p className="download-eyebrow">Three-step Setup</p>
              <h2 id="get-started-title">How to Get Started</h2>
            </div>
            <ol className="download-steps">
              {installationSteps.map(({ title, description }, index) => (
                <li key={title}>
                  <span className="download-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>

      <section aria-labelledby="important-title" className="download-section download-important">
        <div className="download-container">
          <div className="download-important__box">
            <Info aria-hidden="true" size={19} />
            <div>
              <h2 id="important-title">Important</h2>
              <p>
                Only download MongoDB software from the official MongoDB website. Billvault does
                not modify or redistribute MongoDB installers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="download-support-title" className="download-support">
        <div className="download-container download-support__inner">
          <div>
            <h2 id="download-support-title">Need Help With Installation?</h2>
            <p>
              If you need help installing Billvault or setting up the required database components,
              contact Billvault support.
            </p>
            <p className="download-support__contact">
              <a href="mailto:jayeshkumarbaraiya247@gmail.com">jayeshkumarbaraiya247@gmail.com</a>
              <span aria-hidden="true"> · </span>
              <a
                aria-label="WhatsApp +91 92655 04108 (opens in a new tab)"
                href="https://wa.me/919265504108"
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp +91 92655 04108
              </a>
            </p>
          </div>
          <div className="download-support__actions">
            <Link className="download-button download-button--primary" to="/contact">
              <Mail aria-hidden="true" size={14} />
              Contact Support
            </Link>
            <a
              className="download-button download-button--light"
              href="https://wa.me/919265504108"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={14} />
              WhatsApp Support
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
