const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  assetPrefix: isProd ? "/sauna-master/" : "",
  trailingSlash: true, // Ensure URLs have trailing slashes for GitHub Pages
};

export default nextConfig;
