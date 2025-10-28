/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "alice-ang.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
