import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Transpile Three.js and R3F packages which ship as ES modules
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],
};

export default nextConfig;
