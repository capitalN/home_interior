/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ii2.pepperfry.com",
      "ii3.pepperfry.com",
      "cdn.taggbox.com",
      "ii1.pepperfry.com",
    ],
  },
};

module.exports = nextConfig;
