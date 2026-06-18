"use client";

import Link from "next/link";
import { useState } from "react";

const footerCols = [
  {
    heading: "Platform",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/pricing",      label: "Pricing" },
      { href: "/lead-generation", label: "Sectors" },
      { href: "/diy-cost-calculator", label: "DIY Cost Calculator" },
      { href: "/faq",          label: "FAQ" },
      { href: "/contact",      label: "Contact" },
      { href: "/dashboard",    label: "Client Login" },
      { href: "/signup",       label: "Sign Up" },
    ],
  },
  {
    heading: "Comparisons",
    links: [
      { href: "/comparison/leadhaus-vs-mailchimp", label: "Leadhaus vs Mailchimp" },
      { href: "/comparison/leadhaus-vs-smartlead", label: "Leadhaus vs Smartlead" },
      { href: "/comparison/leadhaus-vs-lemlist",   label: "Leadhaus vs Lemlist" },
      { href: "/comparison/leadhaus-vs-apollo",    label: "Leadhaus vs Apollo" },
      { href: "/comparison/leadhaus-vs-instantly", label: "Leadhaus vs Instantly" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms",   label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [tipEmail, setTipEmail] = useState("");
  const [tipState, setTipState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleTipSignup(e: React.FormEvent) {
    e.preventDefault();
    setTipState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: tipEmail }),
      });
      if (res.ok) {
        setTipState("success");
        setTipEmail("");
      } else {
        setTipState("error");
      }
    } catch {
      setTipState("error");
    }
  }

  return (
    <footer
      style={{
        background: "var(--color-foreground)",
        padding: "0 0 32px",
        borderTop: "1px solid oklch(30% 0.024 58)",
      }}
    >
      <div className="wrap">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                display: "block",
                marginBottom: 12,
                fontSize: 24,
                letterSpacing: "-0.03em",
                color: "var(--color-background)",
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              <span style={{ fontWeight: 700, fontFamily: "var(--font-sans), system-ui, sans-serif" }}>lead</span>
              <span style={{ fontWeight: 300, fontFamily: "var(--font-sans), system-ui, sans-serif" }}>haus</span>
            </Link>
            <p
              style={{
                fontSize: 13,
                color: "oklch(55% 0.018 58)",
                maxWidth: 230,
                lineHeight: 1.65,
              }}
            >
              Premium lead generation for established businesses ready to scale their pipeline.
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h5
                style={{
                  font: "600 11px/1 var(--font-sans), system-ui, sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "oklch(42% 0.012 58)",
                  marginBottom: 14,
                }}
              >
                {col.heading}
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "oklch(68% 0.018 75)",
                        textDecoration: "none",
                        transition: "color 0.18s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-background)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(68% 0.018 75)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Weekly tip email capture */}
        <div style={{
          borderTop: "1px solid oklch(30% 0.024 58)",
          padding: "28px 0",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "oklch(75% 0.018 75)", marginBottom: 4 }}>
              One lead generation tip, every Monday morning.
            </p>
            <p style={{ fontSize: 12, color: "oklch(45% 0.012 58)" }}>
              No selling. Just one practical insight to help you win more clients.
            </p>
          </div>
          {tipState === "success" ? (
            <p style={{ fontSize: 13, color: "var(--color-accent)", fontWeight: 600 }}>
              You are in. First tip arrives Monday morning.
            </p>
          ) : (
            <form
              onSubmit={handleTipSignup}
              style={{ display: "flex", gap: 8, flexShrink: 0, flexWrap: "wrap" }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={tipEmail}
                onChange={(e) => setTipEmail(e.target.value)}
                style={{
                  background: "oklch(22% 0.024 58)",
                  border: `1px solid ${tipState === "error" ? "oklch(55% 0.15 25)" : "oklch(35% 0.024 58)"}`,
                  color: "oklch(85% 0.018 75)",
                  padding: "9px 14px",
                  fontSize: 13,
                  borderRadius: 0,
                  outline: "none",
                  width: 220,
                }}
              />
              <button
                type="submit"
                disabled={tipState === "loading"}
                style={{
                  background: "var(--color-accent)",
                  color: "#fff",
                  border: "none",
                  padding: "9px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: tipState === "loading" ? "not-allowed" : "pointer",
                  borderRadius: 0,
                  whiteSpace: "nowrap",
                  opacity: tipState === "loading" ? 0.7 : 1,
                }}
              >
                {tipState === "loading" ? "Sending..." : "Send me the tips"}
              </button>
              {tipState === "error" && (
                <p style={{ fontSize: 12, color: "oklch(55% 0.15 25)", width: "100%" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "oklch(40% 0.012 58)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span>© {currentYear} Leadhaus. All rights reserved.</span>
            <a
              href="https://google.com/preferences/source?q=theleadhaus.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none", opacity: 0.75 }}
            >
              ★ Add Leadhaus as a preferred source on Google
            </a>
          </div>

          {/* BlockHaus group badge */}
          <a
            href="https://blockhaus.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              opacity: 0.55,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
            title="Part of the BlockHaus Group"
          >
            <span style={{ fontSize: 11, color: "oklch(55% 0.018 58)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
              Part of
            </span>
            <img
              src="/blockhaus-logo-wht.png"
              alt="BlockHaus"
              style={{ height: 16, width: "auto", display: "block" }}
            />
          </a>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding: 56px 0 48px;
          border-bottom: 1px solid oklch(30% 0.024 58);
          margin-bottom: 24px;
        }
        .footer-bottom {
          flex-wrap: wrap;
          gap: 8px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 6px; }
        }
      `}</style>
    </footer>
  );
}
