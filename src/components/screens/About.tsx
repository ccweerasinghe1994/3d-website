"use client";

import { PORTFOLIO } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollProgress";

export default function About() {
  const { ref, revealed } = useScrollReveal(0.05);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="section-header">
        <span className="section-pass mono">[ NORMAL ]</span>
        <h2
          id="about-heading"
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className={`section-title${revealed ? " section-title--revealed" : ""}`}
        >
          About
        </h2>
      </div>

      <div className="about__grid">
        {/* Portrait / wireframe self-portrait */}
        <div className="about__portrait" aria-hidden="true">
          <div className="about__portrait-frame">
            {/* Wireframe self-portrait — SVG placeholder */}
            <svg
              viewBox="0 0 240 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Wireframe self-portrait"
              role="img"
              className="about__wireframe-svg"
            >
              {/* Head */}
              <ellipse cx="120" cy="85" rx="55" ry="65" stroke="var(--normal)" strokeWidth="0.75" />
              {/* Neck */}
              <line x1="100" y1="148" x2="95" y2="170" stroke="var(--normal)" strokeWidth="0.75" />
              <line x1="140" y1="148" x2="145" y2="170" stroke="var(--normal)" strokeWidth="0.75" />
              {/* Shoulders */}
              <path d="M60 185 Q95 170 120 172 Q145 170 180 185" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              {/* Body outline */}
              <path d="M60 185 L50 300 L190 300 L180 185" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              {/* Construction lines — grid overlay */}
              <line x1="120" y1="20" x2="120" y2="300" stroke="var(--slate)" strokeWidth="0.5" strokeDasharray="3 4" />
              <line x1="40" y1="85" x2="200" y2="85" stroke="var(--slate)" strokeWidth="0.5" strokeDasharray="3 4" />
              <line x1="40" y1="150" x2="200" y2="150" stroke="var(--slate)" strokeWidth="0.5" strokeDasharray="3 4" />
              {/* Eyes */}
              <ellipse cx="98" cy="80" rx="9" ry="6" stroke="var(--normal)" strokeWidth="0.75" />
              <ellipse cx="142" cy="80" rx="9" ry="6" stroke="var(--normal)" strokeWidth="0.75" />
              {/* Nose bridge */}
              <path d="M120 86 L114 108 L126 108" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              {/* Mouth */}
              <path d="M103 122 Q120 130 137 122" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              {/* Ear guides */}
              <path d="M65 78 Q60 85 65 95" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              <path d="M175 78 Q180 85 175 95" stroke="var(--normal)" strokeWidth="0.75" fill="none" />
              {/* Wireframe triangulation marks */}
              <line x1="120" y1="20" x2="65" y2="78" stroke="var(--slate)" strokeWidth="0.4" />
              <line x1="120" y1="20" x2="175" y2="78" stroke="var(--slate)" strokeWidth="0.4" />
              <line x1="65" y1="78" x2="175" y2="78" stroke="var(--slate)" strokeWidth="0.4" />
              <line x1="65" y1="95" x2="175" y2="95" stroke="var(--slate)" strokeWidth="0.4" />
              <line x1="65" y1="148" x2="175" y2="148" stroke="var(--slate)" strokeWidth="0.4" />
            </svg>
            {/* Mono label */}
            <div className="about__portrait-label">
              <span className="mono muted">WIREFRAME · VIEW ANGLE 0°</span>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="about__content">
          <p className="about__bio">{PORTFOLIO.shortBio}</p>

          <div className="about__capabilities">
            <span className="mono muted about__cap-label">CAPABILITIES</span>
            <ul role="list" className="about__cap-list">
              {PORTFOLIO.capabilities.map((cap, i) => (
                <li key={i} className="about__cap-item">
                  <span className="about__cap-dash" aria-hidden="true">+</span>
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="about__stack">
            <span className="mono muted about__cap-label">STACK</span>
            <div className="about__stack-chips">
              {PORTFOLIO.stack.map((s) => (
                <span key={s} className="chip chip--lg">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
