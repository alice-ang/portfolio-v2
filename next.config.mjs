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
    ],
  },
};

export default nextConfig;
