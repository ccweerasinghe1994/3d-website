// ─── PASS STORE ────────────────────────────────────────────────────────────
// Global state for the active render pass and the preloader phase.
// ─────────────────────────────────────────────────────────────────────────── 
import { create } from "zustand";

export type Pass = "BEAUTY" | "ALBEDO" | "NORMAL" | "DEPTH" | "WIRE";

export type LoadPhase =
  | "wire"      // Wireframe only
  | "normal"    // + Normal pass
  | "beauty"    // + Lit / Beauty
  | "complete"; // Preloader gone

interface PassState {
  activePass: Pass;
  setPass: (pass: Pass) => void;
  loadPhase: LoadPhase;
  setLoadPhase: (phase: LoadPhase) => void;
  loadProgress: number;           // 0–1
  setLoadProgress: (p: number) => void;
  passTransitioning: boolean;
  setPassTransitioning: (v: boolean) => void;
}

export const usePassStore = create<PassState>((set) => ({
  activePass: "BEAUTY",
  setPass: (pass) => set({ activePass: pass, passTransitioning: true }),
  loadPhase: "wire",
  setLoadPhase: (phase) => set({ loadPhase: phase }),
  loadProgress: 0,
  setLoadProgress: (p) => set({ loadProgress: p }),
  passTransitioning: false,
  setPassTransitioning: (v) => set({ passTransitioning: v }),
}));
