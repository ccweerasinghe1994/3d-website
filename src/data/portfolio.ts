// ─── PORTFOLIO DATA ────────────────────────────────────────────────────────
// Replace every value here with your real details.
// Nothing else in the codebase needs to change.

export const PORTFOLIO = {
  name: "Alex Chen",
  role: "Creative Developer",
  location: "London",
  tagline: "Builds real-time 3D graphics for the web.",
  shortBio:
    "I write GLSL, wrangle draw calls, and ship production WebGL that runs at 60fps in a browser tab. Previously at Resn, Jam3, and Google Creative Lab.",

  stack: [
    "TypeScript",
    "React Three Fiber",
    "GLSL / TSL",
    "Next.js",
    "WebGPU",
    "Three.js",
    "WGSL",
    "Blender",
  ],

  capabilities: [
    "Write custom GLSL vertex and fragment shaders",
    "Architect real-time render pipelines in WebGL2 and WebGPU",
    "Optimise draw calls, geometry, and texture atlases for 60fps delivery",
    "Build instanced geometry systems handling millions of vertices",
    "Implement post-processing passes: SSAO, bloom, depth-of-field, motion blur",
    "Integrate physics simulation with GPU-side particle systems",
    "Deliver accessible, keyboard-navigable canvas experiences",
    "Ship to production inside Next.js with lazy-loaded 3D bundles",
  ],

  projects: [
    {
      slug: "nebula-flow",
      title: "NebulaFlow",
      year: 2026,
      outcome:
        "Interactive particle galaxy used as a live homepage for a music streaming platform. 1.2M unique visitors in launch week.",
      stack: ["R3F", "GLSL", "WebGPU", "TypeScript"],
      hardPart:
        "Sustaining 2M GPU-side particles at 60fps across mid-tier mobile hardware required a custom LOD system that dynamically culled simulation resolution based on measured frame budget. The particle force-field was computed entirely on the GPU using transform-feedback to avoid CPU stalls.",
      problem:
        "The client needed a hero that felt alive at any viewport size without destroying battery life on phones.",
      approach:
        "Built a compute-shader particle system in WebGPU with a JS fallback to instanced mesh in WebGL2. Camera drift and field turbulence are driven by audio-frequency data from the Web Audio API analyser node.",
      outcome_long:
        "Shipped in six weeks. Peak draw call count: 4. Average frame time on a 2021 iPhone: 11ms. Bundle: 182kb gzipped.",
      metrics: {
        drawCallsBefore: 480,
        drawCallsAfter: 4,
        frameTimeBefore: 38,
        frameTimeAfter: 11,
        payloadBefore: "2.1 MB",
        payloadAfter: "182 KB",
      },
      liveUrl: "https://example.com/nebula",
      sourceUrl: "https://github.com/alexchen/nebula-flow",
    },
    {
      slug: "terrain-forge",
      title: "TerrainForge",
      year: 2025,
      outcome:
        "Procedural terrain editor running entirely in the browser. Used by 4,000 indie game developers as a free tool.",
      stack: ["Three.js", "WGSL", "WebGPU", "React"],
      hardPart:
        "Real-time displacement editing on a 512×512 heightmap at 60fps required compute shaders to rebuild normals and tangents every frame. The first attempt using JS-side Float32Array manipulation ran at 8fps; moving the rebuild to a WGSL compute pass brought it to 60fps with headroom.",
      problem:
        "Existing terrain tools either require Unity/Unreal or crash the browser tab at high polygon counts.",
      approach:
        "Tessellated mesh at multiple LOD rings around the camera, with a WebGPU compute pipeline handling erosion simulation and normal recalculation each frame.",
      outcome_long:
        "Published as an open-source tool. 4,000 monthly active users. The compute pass processes a 512×512 grid in under 1ms.",
      metrics: {
        drawCallsBefore: 220,
        drawCallsAfter: 12,
        frameTimeBefore: 42,
        frameTimeAfter: 9,
        payloadBefore: "3.4 MB",
        payloadAfter: "290 KB",
      },
      liveUrl: "https://example.com/terrain",
      sourceUrl: "https://github.com/alexchen/terrain-forge",
    },
    {
      slug: "liquid-sim",
      title: "LiquidSim",
      year: 2025,
      outcome:
        "Real-time fluid simulation rendered as a product configurator for a cosmetics brand. Conversion rate up 34% vs static imagery.",
      stack: ["R3F", "GLSL", "Three.js", "Next.js"],
      hardPart:
        "A convincing liquid surface needed accurate refraction, caustics, and subsurface scattering — all in a single draw call to keep frame time under 16ms. The caustic pattern is computed analytically in the fragment shader from the surface normal field rather than sampled from a texture.",
      problem:
        "Client's product imagery was static PNGs. The brief was to let users pour virtual liquid into the bottle and see it settle in real time.",
      approach:
        "Simulated fluid surface using a spring-mesh PDE solver running on the CPU at 30Hz, smoothed with a Gaussian filter, then rendered with a custom three-layer PBR shader handling liquid optics.",
      outcome_long:
        "Deployed across 12 product pages. Average session time on configurator: 3m 20s. Frame time on 2023 MacBook Pro M2: 4ms.",
      metrics: {
        drawCallsBefore: 380,
        drawCallsAfter: 1,
        frameTimeBefore: 28,
        frameTimeAfter: 4,
        payloadBefore: "1.8 MB",
        payloadAfter: "118 KB",
      },
      liveUrl: "https://example.com/liquid",
      sourceUrl: "https://github.com/alexchen/liquid-sim",
    },
  ],

  contact: {
    email: "alex@alexchen.dev",
    github: "github.com/alexchen",
    availability: "September 2026",
  },
} as const;

export type Project = (typeof PORTFOLIO.projects)[number];
