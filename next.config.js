/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
