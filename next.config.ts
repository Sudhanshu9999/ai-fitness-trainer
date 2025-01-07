import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Optional: adds trailing slashes to URLs for consistency
};

export default nextConfig;
