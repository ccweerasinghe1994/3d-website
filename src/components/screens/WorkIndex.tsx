"use client";

import { useState } from "react";
import { PORTFOLIO } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollProgress";
import type { Project } from "@/data/portfolio";

interface WorkRowProps {
  project: Project;
  index: number;
}

function WorkRow({ project, index }: WorkRowProps) {
  const [hovered, setHovered] = useState(false);
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={`work-row${revealed ? " work-row--revealed" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <a
        href={`/work/${project.slug}`}
        className="work-row__link"
        id={`work-row-${project.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`${project.title} — ${project.outcome}`}
      >
        {/* Index number */}
        <span className="work-row__idx mono muted">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <span className="work-row__title">{project.title}</span>

        {/* Outcome — one line */}
        <span className="work-row__outcome muted">{project.outcome.split(".")[0]}.</span>

        {/* Stack chips */}
        <span className="work-row__stack">
          {project.stack.map((s) => (
            <span key={s} className="chip mono">{s}</span>
          ))}
        </span>

        {/* Year */}
        <span className="work-row__year mono muted">{project.year}</span>

        {/* Hover caret */}
        <span className="work-row__caret" aria-hidden="true">→</span>
      </a>

      {/* Hover preview strip */}
      <div
        className={`work-row__preview${hovered ? " work-row__preview--visible" : ""}`}
        aria-hidden="true"
      >
        <div className="work-row__preview-inner">
          <span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>
            PREVIEW · {project.stack[0]} · {project.year}
          </span>
          {/* Animated triangle count for visual interest */}
          <div className="work-row__preview-mesh" />
        </div>
      </div>
    </li>
  );
}

export default function WorkIndex() {
  const { ref, revealed } = useScrollReveal(0.05);

  return (
    <section
      className="work-index"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="section-header">
        <span className="section-pass mono">— ALBEDO</span>
        <h2
          id="work-heading"
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className={`section-title${revealed ? " section-title--revealed" : ""}`}
        >
          Work
        </h2>
      </div>

      <ul
        className="work-list"
        role="list"
        aria-label="Case studies"
      >
        {PORTFOLIO.projects.map((project, i) => (
          <WorkRow key={project.slug} project={project} index={i} />
        ))}
      </ul>

      <div className="work-index__footer hairline-top">
        <span className="mono muted" style={{ fontSize: "10px" }}>
          {PORTFOLIO.projects.length} CASE STUDIES · {PORTFOLIO.stack.length} TECHNOLOGIES
        </span>
      </div>
    </section>
  );
}
