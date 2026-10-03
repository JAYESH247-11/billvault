const owner = 'Jayeshkumar Baraiya';
const email = 'jayeshkumarbaraiya247@gmail.com';
const location = 'Bhavnagar, Gujarat, India';

export const privacyPolicy = {
  title: 'Privacy Policy',
  effectiveDate: 'October 2, 2026',
  sections: [
    {
      heading: '1. Information We Collect',
      introduction: 'To provide our billing services, we collect:',
      bullets: [
        {
          label: 'Account Data:',
          text: ' Your name (or business name), email address, and login credentials.',
        },
        {
          label: 'Financial & Client Data:',
          text: " Information you input into Billvault to generate invoices, which may include your clients' names, addresses, and payment details.",
        },
        {
          label: 'Usage Data:',
          text: ' Diagnostic data regarding how the software is accessed and used.',
        },
      ],
    },
    {
      heading: '2. How We Use Your Information',
      introduction: 'We use the collected data exclusively to:',
      bullets: [
        { text: 'Provide, operate, and maintain the Billvault software.' },
        {
          text: 'Process transactions and send related information, including invoices and confirmations.',
        },
        { text: 'Provide customer support and respond to technical issues.' },
        { text: "Improve the software's functionality and security." },
      ],
    },
    {
      heading: '3. Data Security and Storage',
      paragraphs: [
        'We implement industry-standard security measures to protect your personal and financial data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
      ],
    },
    {
      heading: '4. Data Sharing and Disclosure',
      paragraphs: [
        'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification with our business partners. We may disclose data if required by law or in response to valid requests by public authorities (e.g., a court or government agency).',
      ],
    },
    {
      heading: '5. Your Data Rights',
      paragraphs: [
        'You have the right to access, update, or delete the personal information we have on you. You can request a full export of your data or request account deletion by contacting us directly.',
      ],
    },
    {
      heading: '6. Changes to This Privacy Policy',
      paragraphs: [
        'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date."',
      ],
    },
    {
      heading: '7. Contact Us',
      paragraphs: [
        'For any questions regarding your privacy or data protection, please contact:',
      ],
      contact: { owner, email, location },
    },
  ],
};

export const termsAndConditions = {
  title: 'Terms and Conditions',
  effectiveDate: 'October 2, 2026',
  sections: [
    {
      heading: '1. Agreement to Terms',
      paragraphs: [
        'By accessing or using Billvault, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our service.',
      ],
    },
    {
      heading: '2. License and Use of Software',
      paragraphs: [
        'Billvault grants you a non-exclusive, non-transferable, revocable license to use the software strictly for managing your business billing and invoicing. You may not reverse engineer, duplicate, or resell the software.',
      ],
    },
    {
      heading: '3. User Responsibilities',
      paragraphs: [
        'You are solely responsible for the accuracy of the data, invoices, and financial records generated using Billvault. You agree not to use the software for any illegal activities, including tax fraud or generating falsified documents.',
      ],
    },
    {
      heading: '4. Account Security',
      paragraphs: [
        'You are responsible for safeguarding the password that you use to access Billvault. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
      ],
    },
    {
      heading: '5. Limitation of Liability',
      paragraphs: [
        'Billvault and its owner, Jayeshkumar Baraiya, shall not be held liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business interruptions, arising from the use or inability to use the software.',
      ],
    },
    {
      heading: '6. Termination',
      paragraphs: [
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.',
      ],
    },
    {
      heading: '7. Governing Law',
      paragraphs: [
        'These Terms shall be governed and construed in accordance with the laws of Gujarat, India, without regard to its conflict of law provisions. Any disputes will be subject to the exclusive jurisdiction of the courts in Bhavnagar, Gujarat.',
      ],
    },
    {
      heading: '8. Contact Us',
      paragraphs: ['If you have any questions about these Terms, please contact us:'],
      contact: { owner, email, location },
    },
  ],
};
