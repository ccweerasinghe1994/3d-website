"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/screens/Preloader";
import WorkIndex from "@/components/screens/WorkIndex";
import About from "@/components/screens/About";
import Footer from "@/components/screens/Footer";

// Dynamic import for Hero to avoid SSR issues with Three.js
const Hero = dynamic(() => import("@/components/screens/Hero"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <WorkIndex />
      <About />
      <Footer />
    </main>
  );
}
