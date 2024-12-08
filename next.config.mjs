/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Match all hostnames
      },
    ],
  },
};

export default nextConfig;
