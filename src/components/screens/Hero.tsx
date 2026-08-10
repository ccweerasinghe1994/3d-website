"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeroScene from "@/components/scene/HeroScene";
import PassSwitcher from "@/components/scene/PassSwitcher";
import { usePassStore } from "@/hooks/usePassStore";
import { PORTFOLIO } from "@/data/portfolio";

function HeroContent() {
  const loadPhase   = usePassStore((s) => s.loadPhase);
  const activePass  = usePassStore((s) => s.activePass);
  const heroRef     = useRef<HTMLDivElement>(null);
  const textRef     = useRef<HTMLDivElement>(null);

  // Orchestrated page-load reveal
  useEffect(() => {
    if (loadPhase !== "complete") return;
    const el = textRef.current;
    if (!el) return;
    // Stagger words 80ms apart
    const words = el.querySelectorAll<HTMLElement>(".hero__word");
    words.forEach((w, i) => {
      w.style.transitionDelay = `${i * 80}ms`;
      w.classList.add("hero__word--visible");
    });
  }, [loadPhase]);

  const isReady = loadPhase === "complete";

  // Pass-specific background tint classes
  const passBg: Record<string, string> = {
    NORMAL: "hero--pass-normal",
    DEPTH:  "hero--pass-depth",
  };

  return (
    <section
      className={`hero${isReady ? " hero--ready" : ""}${activePass in passBg ? ` ${passBg[activePass]}` : ""}`}
      id="hero"
      aria-label="Hero section"
      ref={heroRef}
    >
      {/* WebGL canvas */}
      <div className="hero__canvas-wrap" aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.5], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <HeroScene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              maxPolarAngle={Math.PI * 0.65}
              minPolarAngle={Math.PI * 0.35}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero text — anchored lower-left. Real HTML for screen readers. */}
      <div className="hero__content" ref={textRef}>
        <p className="hero__eyebrow">
          <span className="mono">{PORTFOLIO.role}</span>
          <span className="mono muted"> · {PORTFOLIO.location}</span>
        </p>

        <h1 className="hero__title" aria-label={PORTFOLIO.name}>
          {PORTFOLIO.name.split(" ").map((word, i) => (
            <span key={i} className="hero__word-wrap">
              <span className="hero__word">{word}</span>
            </span>
          ))}
        </h1>

        <p className="hero__tagline hero__word-wrap">
          <span className="hero__word">{PORTFOLIO.tagline}</span>
        </p>

        <a
          href="#work"
          className="hero__scroll-cue"
          aria-label="Scroll to work"
          id="hero-scroll-cue"
        >
          <span className="mono">SCROLL</span>
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            aria-hidden="true"
          >
            <line x1="6" y1="0" x2="6" y2="18" stroke="currentColor" strokeWidth="1" />
            <polyline points="2,14 6,18 10,14" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </a>
      </div>

      {/* Pass switcher — keyboard accessible */}
      <PassSwitcher />

      {/* Radial background falloff behind scene */}
      <div className="hero__radial" aria-hidden="true" />
    </section>
  );
}

export default function Hero() {
  return <HeroContent />;
}
