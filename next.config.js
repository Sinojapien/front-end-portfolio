/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rainbow-gala.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "virtualfes2023.flyingmilktea.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "market.flyingmilktea.com",
        port: "",
      },
    ],
  },
};

const sassConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  ...nextConfig,
  ...sassConfig,
};
