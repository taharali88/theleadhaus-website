"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/#services",    label: "Services" },
  { href: "/pricing",      label: "Pricing" },
  { href: "/contact",      label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/#services") return false;
    return pathname === href;
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "oklch(96.5% 0.020 76 / 0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="wrap">
        <div style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>

          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-foreground)",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            LeadHaus
          </Link>

          {/* Desktop nav */}
          <nav
            className="nav-desktop"
            style={{ display: "flex", gap: 28, listStyle: "none", alignItems: "center" }}
            aria-label="Main navigation"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive(l.href) ? "var(--color-foreground)" : "var(--color-muted)",
                  textDecoration: "none",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive(l.href) ? "var(--color-foreground)" : "var(--color-muted)")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="nav-desktop">
            <Link href="/contact" className="btn btn-dark">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "var(--color-foreground)",
            }}
          >
            {open ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: 16,
              paddingBottom: 20,
            }}
            className="nav-mobile-menu"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 15,
                  fontWeight: 500,
                  color: isActive(l.href) ? "var(--color-foreground)" : "var(--color-muted)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ paddingTop: 16, marginTop: 8, borderTop: "1px solid var(--color-border)" }}>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-dark"
                style={{ display: "inline-flex" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-toggle { display: none; }
        .nav-mobile-menu { display: block; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
