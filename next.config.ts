import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // 🛡️ Security: Disable source maps in production builds
  // This prevents users from viewing your original, readable source code
  // in browser DevTools. Only affects `next build`, not `next dev`.
  productionBrowserSourceMaps: false,
};

export default nextConfig;