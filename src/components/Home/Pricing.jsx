import checkIcon from '../../assets/home/check.svg';
import circleXIcon from '../../assets/home/circle-x.svg';
import { commonFeatures, pricingNotes, pricingPlans } from './homeData';

const PlanAvailability = ({ included, label }) => (
  <span className={`pricing-availability${included ? ' is-included' : ' is-unavailable'}`}>
    <img src={included ? checkIcon : circleXIcon} alt="" />
    <span>{label}</span>
  </span>
);

const Pricing = () => (
  <section className="home-section home-pricing" id="pricing" aria-labelledby="pricing-title">
    <div className="home-content home-section-layout">
      <header className="home-section-heading">
        <p className="home-eyebrow">Pricing</p>
        <h2 id="pricing-title">Choose the licence that fits your business.</h2>
      </header>

      <ul className="pricing-common-features" aria-label="Features included across licences">
        {commonFeatures.map((feature) => (
          <li key={feature}>
            <img src={checkIcon} alt="" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <caption className="visually-hidden">Billvault licence comparison</caption>
          <thead>
            <tr>
              <th scope="col">Licence</th>
              <th scope="col">Price</th>
              <th scope="col">Duration</th>
              <th scope="col">Cloud backup</th>
              <th scope="col">Priority support</th>
              <th scope="col">Updates</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan) => (
              <tr
                className={plan.highlighted ? 'pricing-table__popular' : ''}
                id={plan.id}
                key={plan.id}
              >
                <th scope="row" data-label="Licence">
                  <span className="pricing-plan__period">{plan.period}</span>
                  <strong>{plan.name}</strong>
                </th>
                <td data-label="Price">
                  <strong className="pricing-plan__price">{plan.price}</strong>
                  {plan.originalPrice ? (
                    <span className="pricing-plan__original">{plan.originalPrice}</span>
                  ) : null}
                </td>
                <td data-label="Duration">{plan.duration}</td>
                <td data-label="Cloud backup">
                  <PlanAvailability included={plan.cloudBackup} label={plan.cloudBackup ? 'Included' : 'Not included'} />
                </td>
                <td data-label="Priority support">
                  <PlanAvailability included={plan.prioritySupport} label={plan.prioritySupport ? 'Included' : 'Not included'} />
                </td>
                <td data-label="Updates">{plan.updates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="pricing-notes">
        {pricingNotes.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </div>
  </section>
);

export default Pricing;
