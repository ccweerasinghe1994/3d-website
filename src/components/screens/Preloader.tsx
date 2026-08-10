"use client";

import { useEffect, useRef } from "react";
import { usePassStore } from "@/hooks/usePassStore";
import { PORTFOLIO } from "@/data/portfolio";

// Simulated loading steps
const LOAD_STEPS = [
  { label: "INITIALISING WEBGL CONTEXT", size: 0.8 },
  { label: "DECODING GEOMETRY", size: 4.2 },
  { label: "COMPILING VERTEX SHADERS", size: 1.1 },
  { label: "COMPILING FRAGMENT SHADERS", size: 0.9 },
  { label: "UPLOADING BUFFER OBJECTS", size: 2.3 },
  { label: "BUILDING SCENE GRAPH", size: 0.6 },
  { label: "CALIBRATING PASSES", size: 1.9 },
];
const TOTAL_MB = LOAD_STEPS.reduce((a, s) => a + s.size, 0).toFixed(1);

export default function Preloader() {
  const loadPhase     = usePassStore((s) => s.loadPhase);
  const setLoadPhase  = usePassStore((s) => s.setLoadPhase);
  const loadProgress  = usePassStore((s) => s.loadProgress);
  const setProgress   = usePassStore((s) => s.setLoadProgress);

  const stepRef       = useRef(0);
  const accRef        = useRef(0);
  const labelRef      = useRef<HTMLSpanElement>(null);
  const mbRef         = useRef<HTMLSpanElement>(null);
  const barRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let elapsed = 0;
    const STEP_DURATION = 260; // ms per step

    const tick = (ts: number) => {
      if (!elapsed) elapsed = ts;
      const dt = ts - elapsed;
      elapsed = ts;

      const stepIdx = stepRef.current;
      if (stepIdx >= LOAD_STEPS.length) {
        // All steps done — trigger phase transitions
        setProgress(1);

        setTimeout(() => setLoadPhase("normal"),   200);
        setTimeout(() => setLoadPhase("beauty"),   700);
        setTimeout(() => setLoadPhase("complete"), 1400);
        return;
      }

      accRef.current += dt;
      if (accRef.current >= STEP_DURATION) {
        accRef.current = 0;
        stepRef.current += 1;
      }

      const progress = Math.min(stepRef.current / LOAD_STEPS.length, 1);
      setProgress(progress);

      // Update DOM directly to avoid React re-renders on every frame
      const loadedMb = (parseFloat(TOTAL_MB) * progress).toFixed(1);
      const step = LOAD_STEPS[Math.min(stepIdx, LOAD_STEPS.length - 1)];
      if (labelRef.current) labelRef.current.textContent = step.label;
      if (mbRef.current) mbRef.current.textContent = `${loadedMb} / ${TOTAL_MB} MB`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadPhase === "complete") return null;

  const isExiting = loadProgress >= 1;

  return (
    <div
      className={`preloader${isExiting ? " preloader--exit" : ""}`}
      aria-label="Loading 3D scene"
      role="status"
    >
      {/* Phase label */}
      <div className="preloader__phase">
        {loadPhase === "wire"   && "PASS 1 · WIREFRAME"}
        {loadPhase === "normal" && "PASS 2 · NORMALS"}
        {loadPhase === "beauty" && "PASS 3 · BEAUTY"}
      </div>

      {/* Name */}
      <div className="preloader__name">{PORTFOLIO.name}</div>

      {/* Progress readout */}
      <div className="preloader__readout">
        <span ref={labelRef} className="preloader__label">
          INITIALISING WEBGL CONTEXT
        </span>
        <span className="preloader__sep">·</span>
        <span ref={mbRef} className="preloader__mb">
          0.0 / {TOTAL_MB} MB
        </span>
      </div>

      {/* Hairline progress bar */}
      <div className="preloader__track">
        <div ref={barRef} className="preloader__bar" />
      </div>
    </div>
  );
}
