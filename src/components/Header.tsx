"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="text-foreground flex items-center gap-2">
            <span className="w-7 h-7 rounded-none bg-accent flex items-center justify-center text-background text-sm font-serif italic font-bold">L</span>
            <span className="font-serif italic font-medium text-xl tracking-tight">Leadhaus</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[13px] font-medium text-body hover:text-foreground transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact" className="text-[13px] font-medium text-body hover:text-foreground transition-colors">
              Book a call
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center bg-accent px-5 py-2 text-[12px] font-medium text-background tracking-wider uppercase hover:bg-accent-hover transition-colors duration-200">
              Get started
            </Link>
          </div>

          <button type="button" className="md:hidden p-2 text-body hover:text-foreground" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border py-4 space-y-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-3 py-2.5 text-sm text-body hover:text-foreground hover:bg-surface rounded-none" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <div className="pt-3 mt-3 border-t border-border space-y-2">
              <Link href="/contact" className="block px-3 py-2.5 text-sm text-body hover:text-foreground" onClick={() => setOpen(false)}>Book a call</Link>
              <Link href="/pricing" className="block bg-accent px-3 py-2.5 text-xs font-medium text-background text-center tracking-wider uppercase hover:bg-accent-hover" onClick={() => setOpen(false)}>Get started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

