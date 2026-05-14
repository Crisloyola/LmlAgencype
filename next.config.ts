import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirige www → non-www (301 permanente)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lmlagencype.com" }],
        destination: "https://lmlagencype.com/:path*",
        permanent: true,
      },
      // Redirige dominio Vercel → dominio propio (301 permanente)
      {
        source: "/:path*",
        has: [{ type: "host", value: "lmlagencype.vercel.app" }],
        destination: "https://lmlagencype.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
