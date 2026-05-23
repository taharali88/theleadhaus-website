import Link from "next/link";

const footerLinks = {
  product: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-body">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-none bg-accent flex items-center justify-center text-background text-xs font-serif italic font-bold">L</span>
              <span className="font-serif italic font-medium text-lg tracking-tight">Leadhaus</span>
            </Link>
            <p className="mt-4 text-sm text-body max-w-md leading-relaxed">
              We find your buyers, send the outreach, and deliver enquiries to
              your inbox. One fixed price every month. No software to learn.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-body hover:text-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-body hover:text-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
            <span>GDPR Compliant</span>
            <span>Payments by Stripe</span>
            <span>ICO Registered</span>
            <span>Registered in England</span>
            <span>Made in the UK</span>
          </div>
          <p className="mt-4 text-xs text-muted">
            &copy; {currentYear} Leadhaus. Operated by Tahar Ali, sole trader registered in England.
          </p>
        </div>
      </div>
    </footer>
  );
}

