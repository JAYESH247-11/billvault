import LegalPage from '../../components/Legal/LegalPage';
import { termsAndConditions } from '../../data/legalContent';
import usePageMetadata from '../../hooks/usePageMetadata';

const TermsPage = () => {
  usePageMetadata({
    title: 'Terms and Conditions | Billvault',
    description:
      'Read the Billvault Terms and Conditions covering software use, user responsibilities, security, liability, termination and governing law.',
  });

  return <LegalPage content={termsAndConditions} />;
};

export default TermsPage;
