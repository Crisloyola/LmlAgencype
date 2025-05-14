/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true, // ← esto debe estar
  },
};

module.exports = nextConfig;
