import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ['images.rugs.com','images.pexels.com','images.unsplash.com','fakestoreapi.com','i.ibb.co']
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
