---
name: Render Passes Portfolio
description: A full-stack developer portfolio built on the visual vocabulary of a graphics renderer — deep indigo void, periwinkle normal-map light, bone UI type.
colors:
  void: "#0C0B16"
  slate: "#232036"
  normal: "#8C8CF5"
  bone: "#E6E2D9"
  muted: "#6E6A85"
  depth: "#5BE0C8"
typography:
  display:
    fontFamily: "'Anybody', 'Space Grotesk', sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: '"wdth" 115, "wght" 800'
  headline:
    fontFamily: "'Anybody', 'Space Grotesk', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: '"wdth" 110, "wght" 700'
  title:
    fontFamily: "'Anybody', 'Space Grotesk', sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontVariation: '"wdth" 105, "wght" 600'
  body:
    fontFamily: "'Archivo', 'Public Sans', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Geist Mono', 'IBM Plex Mono', monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  24: "6rem"
  32: "8rem"
components:
  pass-btn:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "label"
    padding: "0 0 3px 0"
  pass-btn-active:
    backgroundColor: "transparent"
    textColor: "{colors.depth}"
    typography: "label"
    padding: "0 0 3px 0"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "label"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  work-row:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
  work-row-hover:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
---

# Design System: Render Passes Portfolio

## Overview

**Creative North Star: "The Calibrated Instrument"**

This is a design system that looks like the inside of a well-tuned renderer — every element is precisely placed, purposeful, and technically legible. The visual world borrows its vocabulary from GPU debugging tools and render-pass inspection views: the deep indigo void of a cleared framebuffer, the periwinkle of world-space normal encoding, the mint pulse of an active draw call. Nothing is decorative; every color token, every hairline rule, and every mono label either carries information or gets out of the way.

The interface recedes to let the work advance. The 3D scene is the dominant visual object; the surrounding UI is instruments and readouts, not a frame. This calibration is reflected in the density strategy: the only dense layer is the mono label layer — data, stack chips, telemetry, timestamps — while the layout itself breathes generously. The visual richness lives in the geometry, not the chrome.

The system has a single kinetic element: the variable-font width axis on Anybody. At rest, wide (wdth 110–120). Under scrutiny, it could compress. This creates motion without animation, variation without noise.

**Key Characteristics:**
- Deep indigo-black ground that reads as a void, never as a background
- Periwinkle (`--normal`) operating at large scale — it is the scene's own color, pulled into the UI as a mid-tone, not deployed as a neon accent
- Mint (`--depth`) appearing at most twice per screen as a live-indicator — its rarity is its meaning
- 0px border-radius throughout — no softening; every edge is a decision boundary
- 1px hairlines in `--slate` as the only structural divider; no shadows, no fills, no elevation layers
- Uppercase Geist Mono at 10–11px for all data, labels, and metadata
- Anybody variable font driving all display and heading type, with the width axis as the system's kinetic variable

## Colors

Six tokens only. Every color on every screen is derived from this set with no exceptions.

### Primary
- **Indigo Void** (`#0C0B16`): Page background on every surface. Not neutral black — slightly blue-shifted, which makes the periwinkle scene color read as part of the same color world rather than as an imposed accent. Used as a background behind the 3D canvas, behind sections, and as the preloader fill.
- **Periwinkle Normal** (`#8C8CF5`): The dominant mid-tone, borrowed from world-space normal-map encoding (a blue-shifted grey when normals face the camera). Used at large scale in the 3D scene, as section markers (`— ALBEDO`, `— NORMAL`), capability dashes, active hover carets, and section-pass labels. Not a neon accent — a structural color.

### Secondary
- **Calibration Mint** (`#5BE0C8`): The active-state and live-indicator color. Cool, minty, unmistakably "something is live here." Appears on: the active pass button underline, the preloader phase label, the preloader MB readout, wire stats, and the footer availability status. **Maximum 2 appearances per screen.** Its scarcity is its signal value.

### Neutral
- **Warm Bone** (`#E6E2D9`): Primary text and UI type. Warm off-white — slightly cream-shifted to avoid clinical harshness against the indigo void. Used for all body copy, headings, hero title, and primary interactive label text.
- **Graphite Surface** (`#232036`): Surface color for cards, hairline rules, and hover backgrounds. The 1px hairline (`--hairline`) is `1px solid #232036`. Also used as the work-row hover tint and the preview strip background.
- **Instrument Muted** (`#6E6A85`): Secondary text, metadata, inactive pass buttons, outcome descriptions, and all information that is present but not primary. Used extensively in the mono label layer.

### Named Rules
**The Depth Rule.** `--depth` mint (`#5BE0C8`) appears at most twice per screen. If a design revision adds a third instance, one must be removed. Its meaning — "active," "live," "current" — depends entirely on its rarity.

**The No-Gradients Rule.** No color gradients except the single radial falloff behind the 3D scene (`radial-gradient(ellipse 80% 70% at 60% 45%, color-mix(in oklab, #8C8CF5 8%, transparent) 0%, transparent 70%)`). That gradient is structural — it ties the scene to the page. All others are forbidden.

**The Six-Token Rule.** Every color value on every screen must resolve to one of the six tokens. No inline hex, no one-off tints, no `opacity` hacks to create a seventh color.

## Typography

**Display Font:** Anybody (variable axes: `wdth` 75–125, `wght` 100–900), fallback Space Grotesk, sans-serif
**Body Font:** Archivo (variable), fallback Public Sans, sans-serif
**Label/Mono Font:** Geist Mono (variable weight), fallback IBM Plex Mono, monospace

**Character:** A deliberate three-layer stack. Anybody's variable axes give the display layer a kinetic quality — width changes are motion without animation. Archivo's humanist geometry makes prose readable without warmth-signaling. Geist Mono's clean engineering aesthetic reinforces the instrument metaphor at the data layer.

### Hierarchy
- **Display** (wdth 115, wght 800, `clamp(3.5rem, 8vw, 7rem)`, line-height 0.92, -0.03em): Hero name. One instance per page. Tightly tracked, almost colliding. The width axis is pushed wide to fill horizontal space and telegraph confidence.
- **Headline** (wdth 110, wght 700, `clamp(2rem, 4vw, 3.5rem)`, line-height 0.95, -0.03em): Section titles (Work, About). The width axis slightly narrower than display — still wide, but not hero-scale.
- **Title** (wdth 105, wght 600, `clamp(1.1rem, 2vw, 1.5rem)`, line-height 1.2, -0.02em): Work index row titles, footer heading, case study titles.
- **Body** (Archivo 400, `1.0625rem`, line-height 1.75): Case study prose, bio copy, capability descriptions. Max 65ch line length. This is the reading layer — generous leading, humanist letterforms.
- **Label** (Geist Mono 400, `10–11px`, uppercase, 0.12–0.15em tracking): All data, stack chips, section pass names (`— ALBEDO`), preloader readouts, wire stats, footer status lines, eyebrow metadata. The information layer. Dense in letter-spacing, compressed in size.

### Named Rules
**The Width-as-Motion Rule.** The `wdth` axis on Anybody is the system's only kinetic variable at rest. It does not animate — it is set deliberately per context. Wide (115–125) for hero confidence; medium (105–110) for section authority; narrow (75–85) for mobile reflow. Width changes communicate hierarchy, not decoration.

**The Mono-Only-for-Data Rule.** Geist Mono is used exclusively for labels, data, metadata, and telemetry. It never appears in prose, headings, or navigation. When a visitor sees mono type, they know it carries a fact.

## Layout

The layout model is a single 1280px max-width container with a fluid gutter (`clamp(1.5rem, 5vw, 5rem)`). All sections share this constraint; no section bleeds to full-width except the hero canvas.

**Hero:** Full-viewport (`100svh`, min 600px). The canvas takes the full bleed; all type and controls are positioned absolutely within it. Hero content anchors to the lower-left with the page gutter as margin. The pass switcher pins to the lower-left below the content block.

**Work index:** Hairline-ruled list inside the max-width container. Grid per row: `3rem (index) · 1fr (title) · auto (outcome) · auto (stack chips) · 4rem (year) · 1.5rem (caret)`. No card grid; the list format signals scanability.

**About:** Two-column grid: `280px (portrait) · 1fr (content)`. Collapses to single column below 768px.

**Case study:** Two-column grid: `1fr (prose) · 300px (performance panel)`. Panel is `position: sticky` on desktop. Collapses to single column below 768px.

**Footer:** Three-column grid: `1fr (CTA) · auto (links) · auto (status)`. Collapses to single column below 768px.

**Spacing rhythm:** 4px base unit, scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px. Section padding consistently uses `--space-16` (64px) top and `--space-8` (32px) bottom for the header block.

**Responsive:** Below 768px — work row drops outcome and stack columns, about collapses to single column, footer collapses, pass switcher shows only the active pass with a `PASS ·` prefix.

## Elevation & Depth

This system uses structural depth, not atmospheric depth. There are no shadows, no blurs, no backdrop-filter panels. Depth is entirely positional and hairline-mediated.

The void recedes. The page background (`--void`, `#0C0B16`) reads as a space that extends backward — not a surface. Everything placed on it advances by contrast alone. The 3D geometry in the hero is the single elevated object in the entire page; it floats because it is lit, not because it has a shadow.

Hairlines (`1px solid #232036`) divide content regions. They replace the card border, the section divider, and the modal frame. Their thinness and low contrast make them structural without feeling heavy.

The preloader's 1px progress track is the thinnest surface in the system — a single pixel of `--slate` against the void, filled by `--normal` at `scaleX()`.

### Named Rules
**The Flat-By-Default Rule.** Every surface is flush with the void. Nothing lifts. The only object with visual elevation is the 3D scene, and it earns that position through lighting, not CSS.

**The Hairline-as-Structure Rule.** The 1px hairline in `--slate` is the system's only structural element. It replaces all borders, all cards, all dividers. Adding a second stroke weight, a dashed variant, or any shadow is a violation.

## Shapes

0px border-radius everywhere. No exceptions. Every edge is a hard right angle — this is not minimalism for minimalism's sake, it is the visual language of a tool that processes data, not a product that softens friction.

The only curves in the system belong to the 3D geometry (icosahedron faces, torus knot surfaces, sphere) and to the radial gradient behind the scene. These curves are content; they are not UI shape language.

Chips (stack labels) have `0px` radius with a `1px solid --slate` border. The pass switcher buttons have no border at all — just color and a 1px underline on the active state. The portrait frame is a hairline rectangle.

**The Zero-Radius Rule.** No `border-radius` on any UI element. If a component in a new screen has rounded corners by default (e.g., a browser form control), reset it explicitly.

## Components

### Pass Switcher (Signature Component)
The system's most distinctive element. A horizontal strip of five mono-type buttons pinned to the lower-left of the hero viewport.

- **Layout:** Flexbox row, `gap: 1rem`. No container, no background, no border.
- **Button (inactive):** Geist Mono 10px uppercase, `letter-spacing: 0.14em`, `color: --muted`, no border, no background. Padding `0 0 3px 0`.
- **Button (active):** `color: --depth` (`#5BE0C8`), with a `1px solid --depth` underline via `::after` pseudo-element absolutely positioned at `bottom: 0`. This is the only 1px underline in the system that uses `--depth` rather than `--slate`.
- **Button (hover):** `color: --bone`. No underline.
- **Wire stats overlay:** When WIRE pass is active, a top-right readout appears: `▲ 14.2K TRIS · 8.8K VERTS` in `--depth` mono type at 10px.
- **Accessibility:** `role="tablist"` on container, `role="tab"` + `aria-selected` on each button. Keyboard: Tab to focus, Enter/Space to activate. Focus ring: 2px `--normal` outline, 2px offset.

### Chips
Used for stack labels in the work index, case study eyebrows, and about section.

- **Style:** No background, `1px solid --slate` border, Geist Mono 10px uppercase, `color: --muted`, `padding: 2px 6px` (or `3px 8px` for `.chip--lg`), 0px radius.
- **States:** No hover state; chips are informational, not interactive.
- **Rule:** Chips never use `--normal` or `--depth`. They are always `--muted` on `--slate` border — this keeps them from competing with active-state signals.

### Work Row
The primary navigation pattern for case studies. A hairline-ruled list item, not a card.

- **Layout:** CSS Grid — `3rem · 1fr · auto · auto · 4rem · 1.5rem` columns, `gap: 1.5rem`, `padding: 1.5rem [gutter]`.
- **Default:** No background; the void shows through. 1px `--slate` bottom border.
- **Hover:** `color-mix(in oklab, --slate 60%, transparent)` background tint on the row. The `→` caret in `--normal` slides in from the left (`translateX(-6px)` → `translateX(0)`). A `220px` preview strip slides in from the right.
- **Preview strip:** `background: --slate`, `border-left: 1px solid --slate`. Contains a CSS-animated wireframe mesh (80×80px square, 1px `--normal` border, rotating slowly). This is a placeholder for real project thumbnails.
- **Scroll reveal:** Rows fade and slide in (`opacity 0 → 1`, `translateY(16px) → 0`) via IntersectionObserver, with 70ms stagger between rows.

### Section Header
Appears before each major section (Work, About, Footer).

- **Structure:** Pass label above title. Pass label: `.section-pass` — Geist Mono 11px uppercase, `color: --normal`, e.g. `— ALBEDO`.
- **Title:** Anybody display, `clamp(2rem, 4vw, 3.5rem)`, wdth 110, wght 700, -0.03em tracking. Fades and slides up on scroll via IntersectionObserver.
- **Container:** Max-width 1280px, page gutter padding, `1px solid --slate` bottom border.

### Performance Panel (Case Study)
A sticky sidebar on case study pages showing before/after engineering metrics.

- **Container:** `1px solid --slate` border, `1.5rem` padding, `position: sticky; top: 2rem`.
- **Label:** Geist Mono 10px, `color: --normal`, uppercase — `PERFORMANCE DELTA`.
- **Metric row:** Label (`--muted` 10px mono) above two values. Before value: `--muted`, `line-through`. After value: `--depth`, larger (`1.25rem` mono). Rows separated by `1px solid --slate`.
- **Philosophy:** The before value exists to make the after value legible. Striking through the before in `--muted` says "this problem is solved" without requiring prose to say it.

### Preloader
A full-screen overlay that assembles the scene pass-by-pass.

- **Behavior:** Fixed, `z-index: 100`, covers the entire viewport. Content anchors to the bottom-left. Fades out with `opacity 0.7s ease-in` on completion.
- **Phase label:** 10px `--depth` mono — `PASS 1 · WIREFRAME`, `PASS 2 · NORMALS`, `PASS 3 · BEAUTY`.
- **Name display:** Anybody, wdth 75 (compressed), `opacity: 0.15` — a ghosted watermark, not a readable headline.
- **Progress readout:** 11px bone mono — `DECODING GEOMETRY · 4.2 / 11.8 MB`. The MB value renders in `--depth`.
- **Track:** 1px `--slate` hairline. Fill: `--normal` scaling from `scaleX(0)` to `scaleX(1)`.

## Do's and Don'ts

### Do:
- **Do** use `color-mix(in oklab, ...)` for all tints and blends — it stays within the six-token palette without adding new hex values.
- **Do** set Anybody's `font-variation-settings` explicitly on every display and headline element. Never rely on the default weight axis alone.
- **Do** use the `--depth` mint exclusively for: active pass button, preloader phase and MB readout, wire stats, footer availability status. If a new design needs a live/active indicator, it uses `--depth` and displaces one of the existing uses if the two-per-screen cap is at risk.
- **Do** use `--normal` periwinkle as a structural mid-tone — for section markers, capability dashes, active carets, case study subheadings. It is not an accent; it is the scene's own color imported into the UI.
- **Do** write all Geist Mono labels in uppercase with `letter-spacing: 0.12em` minimum. Mono in sentence case reads as an error in this system.
- **Do** provide a `prefers-reduced-motion` variant for every animation: remove camera drift, remove word-reveal stagger, remove scroll parallax, keep pass transitions at 150ms crossfade only.

### Don't:
- **Don't** use `--depth` mint more than twice on any single screen. Count both instances before shipping.
- **Don't** add `border-radius` to any element. Not `2px`, not `4px`, not `50%` for avatars. The zero-radius rule has no exceptions in the UI layer.
- **Don't** use `box-shadow`, `text-shadow`, `filter: drop-shadow`, or `backdrop-filter`. There are no shadows in this system. Depth is structural, not atmospheric.
- **Don't** introduce a seventh color. Not as an inline hex, not as a `rgba()` tint of an existing token, not as a CSS `opacity` workaround. Use `color-mix(in oklab, [token] [%], transparent)` instead.
- **Don't** use Anybody or Archivo for data labels, telemetry, timestamps, or stack chips. Those are Geist Mono territory.
- **Don't** use gradients except the single radial falloff behind the hero scene. No gradient text, no gradient borders, no gradient buttons.
- **Don't** center hero type. The lower-left anchor is the layout decision — it is not negotiable. Centered type would read as a landing page, not an instrument.
- **Don't** use the word "passionate," "crafting," or "digital experiences" anywhere in copy. Plain verbs, specific outcomes, real numbers.
