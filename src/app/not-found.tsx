export default function NotFound() {
  return (
    <div
      style={{
        background: "var(--void)",
        color: "var(--bone)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "5rem",
        fontFamily: "var(--font-mono, monospace)",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "var(--muted, #6E6A85)",
          marginBottom: "1rem",
          textTransform: "uppercase",
        }}
      >
        — 404
      </span>
      <h1
        style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "1.5rem",
        }}
      >
        Not found
      </h1>
      <a
        href="/"
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "var(--normal, #8C8CF5)",
          textTransform: "uppercase",
        }}
      >
        ← RETURN HOME
      </a>
    </div>
  );
}
