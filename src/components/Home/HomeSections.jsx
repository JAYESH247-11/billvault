import Section from '../Section';
import { ProductPreview } from './Hero';
import checkIcon from '../../assets/home/check-alt.svg';
import keyIcon from '../../assets/home/key-round.svg';
import mailCheckIcon from '../../assets/home/mail-check.svg';
import calendarCheckIcon from '../../assets/home/calendar-check.svg';
import {
  billingCapabilities,
  businessRecords,
  features,
  howItWorks,
  inventoryCapabilities,
  inventoryFlow,
  inventoryLedger,
  productAreas,
  securityItems,
} from './homeData';

const securityIcons = {
  key: keyIcon,
  check: checkIcon,
  mail: mailCheckIcon,
  calendar: calendarCheckIcon,
};

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="home-section-heading">
    <p className="home-eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description ? <p className="home-section-heading__description">{description}</p> : null}
  </div>
);

export const ProductPositioning = () => (
  <Section className="home-section home-positioning" id="product">
    <div className="home-content home-positioning__content">
      <SectionHeading
        eyebrow="Billvault"
        title="Everything you need to run daily billing."
        description="Billvault brings billing, customers, products, inventory, purchases, payments and returns together in one Windows desktop application."
      />
      <div className="home-positioning__summary" aria-label="Billvault product areas">
        {productAreas.map((area, index) => (
          <div className="home-positioning__area" key={area}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{area}</strong>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export const Features = () => (
  <Section className="home-section home-features" id="features">
    <div className="home-content">
      <div className="home-section-layout">
        <SectionHeading eyebrow="Core features" title="Built around your daily business work" />
        <div className="home-feature-grid">
          {features.map(({ title, description }, index) => (
            <article className="home-feature" key={title}>
              <span className="home-feature__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const BillingCapabilities = () => (
  <Section className="home-section home-billing" id="billing-capabilities">
    <div className="home-content home-billing__layout">
      <div className="home-billing__copy">
        <SectionHeading
          eyebrow="Invoices"
          title="Billing made for real business workflows"
        />
        <ul className="home-check-list home-billing__list">
          {billingCapabilities.map((capability) => (
            <li key={capability}>
              <img src={checkIcon} alt="" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-billing__visual" aria-hidden="true">
        <ProductPreview />
      </div>
    </div>
  </Section>
);

export const Inventory = () => (
  <Section className="home-section home-inventory" id="inventory">
    <div className="home-content">
      <div className="home-section-layout">
        <SectionHeading
          eyebrow="Inventory"
          title="Know what you bought, sold and have left."
        />
        <div className="inventory-layout">
          <div className="inventory-ledger">
            <div className="inventory-ledger__heading">
              <h3>Stock ledger</h3>
              <span className="inventory-ledger__status">2 low-stock items</span>
            </div>
            <div className="inventory-ledger__table-wrap">
              <table className="inventory-ledger__table">
                <caption className="visually-hidden">Billvault stock ledger example</caption>
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Opening</th>
                    <th scope="col">In</th>
                    <th scope="col">Out</th>
                    <th scope="col">Current</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryLedger.map(({ product, opening, incoming, outgoing, current }) => (
                    <tr key={product}>
                      <th scope="row">{product}</th>
                      <td>{opening}</td>
                      <td>{incoming}</td>
                      <td>{outgoing}</td>
                      <td>{current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="inventory-records">
            <div className="inventory-movement">
              <h3>Stock movement</h3>
              <p>
                {inventoryFlow.map((step, index) => (
                  <span key={step}>
                    {index > 0 ? <span aria-hidden="true"> → </span> : null}
                    {step}
                  </span>
                ))}
              </p>
            </div>
            <ul className="inventory-capabilities" aria-label="Inventory capabilities">
              {inventoryCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export const BusinessManagement = () => (
  <Section className="home-section home-records">
    <div className="home-content">
      <div className="home-section-layout">
        <SectionHeading
          eyebrow="Records"
          title="Keep your customer and payment records together."
        />
        <div className="business-record-grid">
          {businessRecords.map(({ id, title, items }) => (
            <article className="business-record" id={id} key={id}>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                    <span aria-hidden="true">—</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const HowItWorks = () => (
  <Section className="home-section home-how" id="how-it-works">
    <div className="home-content">
      <div className="home-section-layout">
        <SectionHeading eyebrow="How it works" title="Start billing in three simple steps" />
        <ol className="home-step-grid">
          {howItWorks.map(({ step, title, description }) => (
            <li className="home-step" key={step}>
              <span className="home-step__number">{step}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);

export const Security = () => (
  <Section className="home-section home-security" id="security">
    <div className="home-content">
      <div className="home-section-layout">
        <SectionHeading
          eyebrow="Security"
          title="Your business data stays protected."
        />
        <div className="security-grid">
          {securityItems.map(({ title, icon }) => (
            <article className="security-item" key={title}>
              <img src={securityIcons[icon]} alt="" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
