import FAQ from '../../components/Home/FAQ';
import FinalCTA from '../../components/Home/FinalCTA';
import Hero from '../../components/Home/Hero';
import {
  BillingCapabilities,
  BusinessManagement,
  Features,
  HowItWorks,
  Inventory,
  ProductPositioning,
  Security,
} from '../../components/Home/HomeSections';
import Pricing from '../../components/Home/Pricing';
import usePageMetadata from '../../hooks/usePageMetadata';
import './HomePage.css';

const HomePage = () => {
  usePageMetadata({
    title: 'Billvault | Billing Software for Indian Businesses',
    description:
      'Billvault is desktop billing software for Indian businesses to manage invoices, customers, products, inventory, payments and sales returns.',
  });

  return (
    <div className="home-page">
      <Hero />
      <ProductPositioning />
      <Features />
      <BillingCapabilities />
      <Inventory />
      <BusinessManagement />
      <HowItWorks />
      <Security />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
