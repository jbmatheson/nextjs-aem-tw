/** @type {import('next').NextConfig} */
const CopyPlugin = require("copy-webpack-plugin");
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
const nextConfig = {
  reactStrictMode: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    instrumentationHook: true,
  },
  headers: () => [
    {
      source: "/(.*?)",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },
  ],
};

export default nextConfig;
