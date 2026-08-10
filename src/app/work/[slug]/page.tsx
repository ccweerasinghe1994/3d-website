import { notFound } from "next/navigation";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import "../../globals.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — ${PORTFOLIO.name}`,
    description: project.outcome,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      <article className="case-study">
        {/* Back link */}
        <a href="/#work" className="case-study__back mono">
          ← BACK TO WORK
        </a>

        {/* Header */}
        <header className="case-study__header">
          <div className="case-study__eyebrow">
            {project.stack.map((s) => (
              <span key={s} className="chip mono">{s}</span>
            ))}
            <span className="mono muted">· {project.year}</span>
          </div>
          <h1 className="case-study__title">{project.title}</h1>
          <p className="case-study__outcome">{project.outcome}</p>
        </header>

        {/* Body — prose + performance panel */}
        <div className="case-study__body">
          <div className="case-study__prose">
            <section aria-labelledby="problem-heading">
              <h3 id="problem-heading">— PROBLEM</h3>
              <p>{project.problem}</p>
            </section>

            <section aria-labelledby="approach-heading">
              <h3 id="approach-heading">— APPROACH</h3>
              <p>{project.approach}</p>
            </section>

            <section aria-labelledby="hard-heading">
              <h3 id="hard-heading">— THE HARD PART</h3>
              <p>{project.hardPart}</p>
            </section>

            <section aria-labelledby="outcome-heading">
              <h3 id="outcome-heading">— OUTCOME</h3>
              <p>{project.outcome_long}</p>
            </section>

            {/* Links */}
            <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                id={`live-demo-${project.slug}`}
                style={{ fontSize: "0.875rem" }}
              >
                <span className="mono">↗ LIVE DEMO</span>
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                id={`source-${project.slug}`}
                style={{ fontSize: "0.875rem" }}
              >
                <span className="mono">↗ SOURCE</span>
              </a>
            </div>
          </div>

          {/* Performance panel */}
          <aside className="perf-panel" aria-labelledby="perf-panel-heading">
            <h2 className="perf-panel__title" id="perf-panel-heading">
              PERFORMANCE DELTA
            </h2>

            <div className="perf-metric">
              <span className="perf-metric__label">DRAW CALLS</span>
              <div className="perf-metric__values">
                <span className="perf-metric__before">{project.metrics.drawCallsBefore}</span>
                <span className="perf-metric__after">{project.metrics.drawCallsAfter}</span>
              </div>
            </div>

            <div className="perf-metric">
              <span className="perf-metric__label">FRAME TIME (MS)</span>
              <div className="perf-metric__values">
                <span className="perf-metric__before">{project.metrics.frameTimeBefore}ms</span>
                <span className="perf-metric__after">{project.metrics.frameTimeAfter}ms</span>
              </div>
            </div>

            <div className="perf-metric">
              <span className="perf-metric__label">PAYLOAD</span>
              <div className="perf-metric__values">
                <span className="perf-metric__before">{project.metrics.payloadBefore}</span>
                <span className="perf-metric__after">{project.metrics.payloadAfter}</span>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
