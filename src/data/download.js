export const billvaultDownloadUrl = import.meta.env.VITE_BILLVAULT_DOWNLOAD_URL?.trim() ?? '';

export const mongoDbLinks = {
  communityDownload: 'https://www.mongodb.com/try/download/community',
  communityGuide: 'https://www.mongodb.com/docs/manual/installation/',
  compassDownload: 'https://www.mongodb.com/try/download/compass',
  compassDocumentation: 'https://www.mongodb.com/docs/compass/',
};

export const installationRequirements = [
  'Windows computer',
  'Billvault application',
  'MongoDB Community Server',
  'MongoDB Compass (optional)',
  'Internet connection for downloading the required software',
];

export const installationSteps = [
  {
    title: 'Download Billvault',
    description: 'Download the Billvault Windows application.',
  },
  {
    title: 'Install MongoDB',
    description: 'Install MongoDB Community Server if it is not already installed.',
  },
  {
    title: 'Start Billvault',
    description: 'Launch Billvault and complete the required initial setup.',
  },
];
