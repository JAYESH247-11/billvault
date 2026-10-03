export const features = [
  { title: 'Unlimited Invoices', description: 'GST and Non-GST invoices' },
  { title: 'GST Reports', description: 'GST-ready invoices with HSN/SAC' },
  {
    title: 'Customer Management',
    description: 'Customer profiles, billing/shipping address and GSTIN',
  },
  {
    title: 'Product Management',
    description: 'Products, categories, brands, units and HSN',
  },
  { title: 'Stock / Inventory', description: 'Real-time stock and low-stock alerts' },
  { title: 'Purchases', description: 'Purchase entries with supplier information' },
  { title: 'Sales Returns', description: 'Return management and settlement' },
  { title: 'Rojmel', description: 'Daily income/expense tracker' },
  { title: 'Payments', description: 'Cash, bank and cheque records' },
  { title: 'Email Backup', description: 'Database backup emailed' },
  { title: 'Backup & Restore', description: 'Local database backup and restore' },
  {
    title: 'Data Security',
    description: 'Machine-bound licence and password-protected access',
  },
];

export const productAreas = [
  'Billing',
  'Customers',
  'Products',
  'Inventory',
  'Purchases',
  'Payments',
  'Returns',
  'Rojmel',
];

export const billingCapabilities = [
  'GST / Non-GST option',
  'Customer selection',
  'Manual customer entry',
  'Product search',
  'Manual product entry',
  'Quantity, price, tax and discount',
  'Automatic calculations',
  'Amount in words',
  'Invoice printing / PDF',
  'Multi-page invoice support',
];

export const inventoryFlow = [
  'Purchase',
  'Stock increases',
  'Invoice',
  'Stock decreases',
  'Sales Return',
];

export const inventoryLedger = [
  { product: 'Cotton fabric', opening: '40', incoming: '24', outgoing: '38', current: '26' },
  { product: 'Packing box', opening: '85', incoming: '50', outgoing: '112', current: '23' },
  { product: 'Receipt roll', opening: '18', incoming: '20', outgoing: '31', current: '7' },
  { product: 'Blue ink set', opening: '12', incoming: '10', outgoing: '17', current: '5' },
];

export const inventoryCapabilities = [
  'Opening stock',
  'Current stock',
  'Minimum stock',
  'Low-stock warning',
  'Purchases',
  'Sales',
  'Sales Returns',
  'Stock Ledger',
  'Stock Adjustments',
];

export const businessRecords = [
  {
    id: 'customers',
    title: 'Customers',
    items: ['Profile', 'Billing address', 'Shipping address', 'GSTIN', 'Contact information', 'Invoice history'],
  },
  {
    id: 'payments',
    title: 'Payments',
    items: ['Cash', 'Bank', 'Cheque', 'Paid', 'Pending', 'Payment records'],
  },
  {
    id: 'rojmel',
    title: 'Rojmel',
    items: ['Daily income', 'Daily expenses', 'Cashbook-style tracking'],
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Install',
    description: 'Install Billvault on Windows.',
  },
  {
    step: '02',
    title: 'Set up your business',
    description: 'Add your business, customers, products and opening stock.',
  },
  {
    step: '03',
    title: 'Start billing',
    description: 'Create invoices, record payments, manage stock and track daily business.',
  },
];

export const securityItems = [
  { title: 'Machine-Bound License', icon: 'key' },
  { title: 'Password Hashed', icon: 'check' },
  { title: 'Email OTP Verification', icon: 'mail' },
  { title: '15-Day Free Trial', icon: 'calendar' },
];

export const commonFeatures = [
  'Unlimited Invoices',
  'GST Reports',
  'Customer Management',
  'Product Management',
];

export const pricingPlans = [
  {
    id: 'free-trial',
    period: 'FREE TRIAL',
    name: 'Free Trial',
    price: '₹0',
    duration: '15 Days',
    cloudBackup: false,
    prioritySupport: false,
    updates: '—',
  },
  {
    id: 'three-months',
    period: '3 MONTHS',
    name: 'Starter',
    price: '₹999',
    duration: '90 Days',
    cloudBackup: false,
    prioritySupport: false,
    updates: '—',
  },
  {
    id: 'six-months',
    period: '6 MONTHS',
    name: 'Popular',
    price: '₹1,799',
    originalPrice: '₹1,998',
    duration: '180 Days',
    cloudBackup: true,
    prioritySupport: false,
    updates: '—',
    highlighted: true,
  },
  {
    id: 'one-year',
    period: '1 YEAR',
    name: 'Best Value',
    price: '₹2,999',
    originalPrice: '₹3,996',
    duration: '365 Days',
    cloudBackup: true,
    prioritySupport: true,
    updates: '—',
  },
  {
    id: 'lifetime',
    period: 'LIFETIME',
    name: 'Ultimate',
    price: '₹9,999',
    duration: 'Forever',
    cloudBackup: true,
    prioritySupport: true,
    updates: 'Free updates forever',
  },
];

export const pricingNotes = [
  'Prices are in Indian Rupees.',
  'Licence keys are delivered by email after payment.',
  'Licences are prepaid for a fixed period and do not renew automatically.',
  'Cloud backup and priority support availability depends on selected plan.',
];

export const faqs = [
  {
    question: 'What happens when my licence expires?',
    answer: 'A fixed-period licence can be renewed when it expires.',
  },
  {
    question: 'Does Billvault work without an active licence?',
    answer: 'Details available on request',
  },
  {
    question: 'Is my licence tied to your computer?',
    answer: 'Machine-bound licensing associates a licence with the authorised computer.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. Billvault includes a 15-day trial with no credit card required.',
  },
  {
    question: 'Does Billvault support GST and Non-GST invoices?',
    answer: 'Yes. Billvault supports both GST and Non-GST workflows.',
  },
  {
    question: 'Can I manage inventory?',
    answer: 'Inventory supports stock tracking, purchases, invoices, returns and related records.',
  },
  {
    question: 'Can I back up my database?',
    answer: 'Use local backup and restore plus email backup. Cloud backup depends on the selected plan.',
  },
  {
    question: 'How can I contact Billvault?',
    answer: 'Email jayeshkumarbaraiya247@gmail.com or WhatsApp +91 92655 04108.',
  },
];
