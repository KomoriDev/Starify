export const deploymentURL = process.env.PROJECT_URL
  ? `${process.env.PROJECT_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
  