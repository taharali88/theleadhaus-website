"use client";

import Link from "next/link";

const footerCols = [
  {
    heading: "Platform",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/pricing",      label: "Pricing" },
      { href: "/faq",          label: "FAQ" },
      { href: "/contact",      label: "Contact" },
    ],
  },
  {
    heading: "Comparisons",
    links: [
      { href: "/comparison/leadhaus-vs-mailchimp", label: "Leadhaus vs Mailchimp" },
      { href: "/comparison/leadhaus-vs-smartlead", label: "Leadhaus vs Smartlead" },
      { href: "/comparison/leadhaus-vs-lemlist",   label: "Leadhaus vs Lemlist" },
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
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: 21,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-background)",
                textDecoration: "none",
              }}
            >
              Leadhaus
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

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "oklch(40% 0.012 58)",
          }}
        >
          <span>© {currentYear} Leadhaus. All rights reserved.</span>
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
