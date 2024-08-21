/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
    domains: [
      "encrypted-tbn0.gstatic.com",
      "images.squarespace-cdn.com",
      "i.pinimg.com",
      "d1e6cjojnyo6nm.cloudfront.net",
      "smartchoice.pk",
      "pngfre.com",
    ],
  },
};

export default nextConfig;