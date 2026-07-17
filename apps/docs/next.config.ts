import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: new URL("../..", import.meta.url).pathname,
  transpilePackages: ["@jixic/react-ui"],
};

export default nextConfig;
