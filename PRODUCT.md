# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Independent clients and small-to-medium businesses seeking a freelance full-stack web developer. They land on this portfolio while actively evaluating candidates for a project or ongoing contract. Decision-making authority sits with the person who found the link — often a technical co-founder, product owner, or digital agency lead — and they are comparing two or three candidates in parallel.

**Secondary (inferred, not confirmed):** Engineering hiring managers or studio leads who encounter the portfolio through a referral or code sample link. Treat as a bonus audience; do not optimize against the primary.

## Product Purpose

A freelance developer portfolio whose single job is to convert a qualified visitor into an inquiry. It must demonstrate real full-stack web capability — not only WebGL/3D graphics — and make it trivially easy for a potential client to understand what they get, see evidence it works, and send a message within 40 seconds of landing.

## Positioning

A full-stack web developer who also ships production-grade real-time 3D — a rare combination that lets a single hire cover both the engineering depth and the visual front of a product. The WebGL/graphics work is evidence of craftsmanship and precision, not the entire offer.

## Operating Context

- Visitors arrive from LinkedIn, referrals, cold outreach, GitHub profile, or a portfolio-sharing community.
- Decision timeline is short: a client shortlisting freelancers may spend under a minute per portfolio before deciding whether to read further or email.
- The site is evaluated on a laptop browser in most cases; mobile is secondary but real.
- The "Render Passes" visual direction (deep indigo, periwinkle normals, bone text) is the established design language — preserve it.

## Capabilities and Constraints

**Confirmed capabilities the portfolio must evidence:**
- Real-time 3D / WebGL (React Three Fiber, Three.js, GLSL, WebGPU) — shown via hero scene and case studies
- Full-stack web development (Next.js, TypeScript, React) — implied by the stack and project outcomes
- Performance optimisation — evidenced by the before/after metrics in the performance panel
- Production delivery — evidenced by real outcome metrics (visitors, conversion rates, MAU) in case studies

**Technical constraints:**
- Built with Next.js 16 App Router, TypeScript, React Three Fiber, Zustand
- Design tokens locked: `--void #0C0B16`, `--slate #232036`, `--normal #8C8CF5`, `--bone #E6E2D9`, `--muted #6E6A85`, `--depth #5BE0C8`
- 0px border-radius, 1px hairlines, no drop shadows, no glassmorphism
- `prefers-reduced-motion` support required
- Keyboard accessibility required (2px `--normal` focus outline)

**Undecided:**
- Owner's real name, role line, location, email, GitHub URL, and availability date — all currently placeholder in `src/data/portfolio.ts`
- Real project titles, metrics, stack, and case study prose — all placeholder

## Brand Commitments

None explicitly stated. The "Render Passes" visual direction (established during build) serves as the de-facto visual identity. No existing logo, wordmark, or external colour palette to honour.

## Evidence on Hand

**Placeholder case studies in `src/data/portfolio.ts`:**
- NebulaFlow — particle galaxy homepage — draw calls 480→4, frame time 38→11ms, payload 2.1MB→182KB
- TerrainForge — procedural terrain editor — draw calls 220→12, frame time 42→9ms, payload 3.4MB→290KB
- LiquidSim — fluid simulation product configurator — draw calls 380→1, frame time 28→4ms, conversion +34%

All metrics and project details are invented placeholders. Real case studies and real metrics must replace them before the site launches. Do not fabricate testimonials, press mentions, or client names.

**Live implementation:**
- `src/` — full Next.js source
- `src/components/scene/shaders/passShaders.ts` — GLSL for all 5 render passes
- `src/data/portfolio.ts` — single content file to replace with real details

## Product Principles

1. **Evidence over claims.** Every assertion of quality must be backed by a real number, a real project, or a live demo. The performance panel exists for this reason.
2. **Get the client to the work fast.** Spectacle that delays the case studies is a failure. The pass switcher demonstrates graphics competence; the work index is one scroll away.
3. **One clear action.** The footer exists to generate an email inquiry. Everything else supports or does not block that action.
4. **Full-stack legibility.** The site must read as a full-stack developer portfolio that also does 3D — not a 3D specialist portfolio that happens to know React. Case study prose and stack chips must reflect this balance.
5. **Honest degradation.** Mobile shows a simplified scene with reduced geometry. `prefers-reduced-motion` removes all parallax and camera drift. These are features, not compromises.

## Accessibility & Inclusion

- `prefers-reduced-motion`: camera drift, word-reveal animation, and scroll parallax disabled; pass transitions instant (150ms crossfade only)
- Keyboard navigation: all interactive elements reachable by Tab; Enter/Space activates; visible 2px `--normal` focus ring with 2px offset
- All canvas content mirrored as real HTML for screen readers
- Pass switcher: `role="tablist"` + `role="tab"` + `aria-selected`
