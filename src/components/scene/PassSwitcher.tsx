"use client";

import { useCallback } from "react";
import { usePassStore, type Pass } from "@/hooks/usePassStore";

const PASSES: Pass[] = ["BEAUTY", "ALBEDO", "NORMAL", "DEPTH", "WIRE"];

// Triangle count labels shown in corner when WIRE is active
const WIRE_STATS = { tris: "14.2K", verts: "8.8K" };

export default function PassSwitcher() {
  const activePass         = usePassStore((s) => s.activePass);
  const setPass            = usePassStore((s) => s.setPass);
  const setPassTransitioning = usePassStore((s) => s.setPassTransitioning);
  const loadPhase          = usePassStore((s) => s.loadPhase);

  const handleSelect = useCallback(
    (pass: Pass) => {
      if (pass === activePass) return;
      setPass(pass);
      // Allow transition flag to reset after animation
      setTimeout(() => setPassTransitioning(false), 700);
    },
    [activePass, setPass, setPassTransitioning]
  );

  const handleKeyDown = (e: React.KeyboardEvent, pass: Pass) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(pass);
    }
  };

  if (loadPhase !== "complete") return null;

  return (
    <>
      {/* Pass switcher — pinned bottom-left */}
      <div
        className="pass-switcher"
        role="tablist"
        aria-label="Render pass selector"
      >
        {PASSES.map((pass) => {
          const isActive = pass === activePass;
          return (
            <button
              key={pass}
              role="tab"
              aria-selected={isActive}
              aria-label={`Switch to ${pass} pass`}
              id={`pass-btn-${pass.toLowerCase()}`}
              className={`pass-btn${isActive ? " pass-btn--active" : ""}`}
              onClick={() => handleSelect(pass)}
              onKeyDown={(e) => handleKeyDown(e, pass)}
            >
              {pass}
            </button>
          );
        })}
      </div>

      {/* Wire stats — visible only in WIRE pass */}
      {activePass === "WIRE" && (
        <div className="wire-stats" aria-live="polite">
          <span className="wire-stat">▲ {WIRE_STATS.tris} TRIS</span>
          <span className="wire-stat">{WIRE_STATS.verts} VERTS</span>
        </div>
      )}
    </>
  );
}
