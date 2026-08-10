"use client";

import { PORTFOLIO } from "@/data/portfolio";

export default function Footer() {
  const { contact } = PORTFOLIO;

  return (
    <footer className="footer" id="contact" aria-labelledby="footer-heading">
      <div className="section-header">
        <span className="section-pass mono">— COMPOSITE</span>
      </div>

      <div className="footer__grid">
        {/* Primary action */}
        <div className="footer__cta">
          <h2 id="footer-heading" className="footer__heading">
            Let&apos;s build something real.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="footer__email"
            id="footer-email-link"
            aria-label={`Email ${contact.email}`}
          >
            {contact.email}
          </a>
        </div>

        {/* Links */}
        <nav className="footer__links" aria-label="Social links">
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            id="footer-github-link"
          >
            <span className="mono">GITHUB</span>
            <span className="footer__link-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="footer__link"
            id="footer-email-link-2"
          >
            <span className="mono">EMAIL</span>
            <span className="footer__link-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>

        {/* Status line */}
        <div className="footer__status">
          <span
            className="footer__available mono"
            role="status"
            aria-label={`Available from ${contact.availability}`}
          >
            ● AVAILABLE FROM {contact.availability.toUpperCase()}
          </span>
          <span className="mono muted footer__copyright">
            © {new Date().getFullYear()} {PORTFOLIO.name}
          </span>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="footer__base hairline-top">
        <span className="mono muted" style={{ fontSize: "10px" }}>
          BUILT WITH REACT THREE FIBER · NEXT.JS · WEBGL2
        </span>
        <span className="mono muted" style={{ fontSize: "10px" }}>
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
