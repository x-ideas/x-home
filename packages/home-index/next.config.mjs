import withSerwistInit from "@serwist/next";
import { execSync } from "node:child_process";

// 执行git rev-parse HEAD
const revision = execSync("git rev-parse HEAD").toString().trim();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSerwist(nextConfig);
