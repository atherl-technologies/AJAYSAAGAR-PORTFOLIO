import WithPWA from "next-pwa";

const withPWA = WithPWA({
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
  dest: "/out"
});

const config = withPWA({
  reactStrictMode: false,
  output: "export",  // IMPORTANT
  images: {
    unoptimized: true
  }
});

export default config;
