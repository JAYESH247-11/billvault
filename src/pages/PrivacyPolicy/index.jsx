import LegalPage from '../../components/Legal/LegalPage';
import { privacyPolicy } from '../../data/legalContent';
import usePageMetadata from '../../hooks/usePageMetadata';

const PrivacyPolicyPage = () => {
  usePageMetadata({
    title: 'Privacy Policy | Billvault',
    description:
      'Read the Billvault Privacy Policy covering information collection, use, security, data rights and contact information.',
  });

  return <LegalPage content={privacyPolicy} />;
};

export default PrivacyPolicyPage;
