import { Link } from 'react-router-dom';
import brandMark from '../../assets/home/brand-mark.svg';
import monitorIcon from '../../assets/home/monitor.svg';

const applicationNavigation = [
  'Invoices',
  'Customers',
  'Products',
  'Purchases',
  'Inventory',
  'Payments',
  'Rojmel',
  'Sales Returns',
  'GST Reports',
];

export const ProductPreview = () => (
  <figure className="product-preview">
    <div className="product-window" aria-hidden="true">
      <div className="product-window__titlebar">
        <span className="product-window__app-name">
          <span className="product-window__mini-mark">
            <img src={brandMark} alt="" />
          </span>
          Billvault
        </span>
        <span className="product-window__window-controls">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="product-window__body">
        <aside className="product-window__sidebar">
          <p className="product-window__business">Your business</p>
          <nav aria-label="Product preview">
            {applicationNavigation.map((item, index) => (
              <span
                className={`product-window__nav-item${index === 0 ? ' is-active' : ''}`}
                key={item}
              >
                <i />
                {item}
              </span>
            ))}
          </nav>
        </aside>
        <div className="product-window__workspace">
          <div className="product-window__toolbar">
            <div>
              <p className="product-window__eyebrow">INVOICES</p>
              <h2>New invoice</h2>
              <p className="product-window__number">GST / Non-GST billing</p>
            </div>
            <span className="product-window__status">Pending</span>
          </div>
          <div className="product-window__parties">
            <div>
              <span>BUSINESS</span>
              <i />
            </div>
            <div>
              <span>CUSTOMER</span>
              <i />
            </div>
          </div>
          <div className="product-window__invoice-table">
            <div className="product-window__table-head">
              <span>PRODUCT</span>
              <span>QTY</span>
              <span>AMOUNT</span>
            </div>
            {[0, 1, 2].map((row) => (
              <div className="product-window__table-row" key={row}>
                <span>
                  <i />
                  <i />
                </span>
                <span>—</span>
                <span>₹ —</span>
              </div>
            ))}
          </div>
          <div className="product-window__totals">
            <span>Tax and discount</span>
            <span>Invoice total</span>
          </div>
          <div className="product-window__amount">
            <span>Amount in words</span>
            <i />
          </div>
          <div className="product-window__workflow">
            <span>Invoice · payment · stock</span>
            <span>PDF / Print</span>
          </div>
        </div>
      </div>
    </div>
    <figcaption className="visually-hidden">
      Billvault desktop billing interface preview with invoice, customer, product, tax and payment
      details.
    </figcaption>
  </figure>
);

const Hero = () => (
  <section className="home-hero" aria-labelledby="home-title">
    <div className="home-content home-hero__content">
      <div className="home-hero__copy">
        <p className="home-hero__badge">
          <img src={monitorIcon} alt="" />
          Windows desktop billing software
        </p>
        <h1 id="home-title">The Smart Billing Software for Indian Businesses</h1>
        <p className="home-hero__description">
          Create invoices, manage customers, track inventory, record payments and handle sales
          returns — all in one simple desktop billing system.
        </p>
        <div className="home-hero__actions">
          <a className="home-button home-button--primary" href="#free-trial">
            Start Free Trial
          </a>
          <Link className="home-button home-button--secondary" to="/contact">
            Contact us
          </Link>
        </div>
        <p className="home-hero__trust">15-day free trial <span>•</span> No credit card required</p>
      </div>
      <ProductPreview />
    </div>
  </section>
);

export default Hero;
