import type { Metadata } from "next";
import { PORTFOLIO } from "@/data/portfolio";
import "../styles/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
  description: `${PORTFOLIO.name} is a ${PORTFOLIO.role} based in ${PORTFOLIO.location} who ${PORTFOLIO.tagline.toLowerCase()} Portfolio of real-time 3D web graphics, WebGL, and React Three Fiber.`,
  openGraph: {
    title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
    description: PORTFOLIO.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
