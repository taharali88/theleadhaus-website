"use client";

import Link from "next/link";
import { useState } from "react";

// Metadata can't be used in client components, so it's set in a parent
const plans = [
  {
    name: "Starter",
    monthly: "2,400",
    annual: "2,040",
    period: "per month + performance",
    desc: "For companies who want to test outbound before committing to scale. A fully managed pilot that delivers real meetings — not promises.",
    features: [
      { text: "ICP definition & list build (up to 500 contacts/mo)", included: true },
      { text: "Email + LinkedIn outreach sequences", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Monthly reporting call", included: true },
      { text: "CRM integration (HubSpot or Salesforce)", included: true },
      { text: "Qualified meeting briefing notes", included: true },
      { text: "Phone outreach", included: false },
      { text: "A/B copy testing", included: false },
      { text: "Live pipeline dashboard", included: false },
    ],
    cta: "Book a call",
    ctaClass: "btn btn-outline btn-full",
    featured: false,
  },
  {
    name: "Growth",
    monthly: "4,800",
    annual: "4,080",
    period: "per month + performance",
    desc: "For established teams ready to build a consistent, scalable pipeline. Full multichannel execution with weekly reporting and live data.",
    features: [
      { text: "ICP definition & list build (up to 1,500 contacts/mo)", included: true },
      { text: "Email + LinkedIn + phone sequences", included: true },
      { text: "Senior account manager (≥5 years experience)", included: true },
      { text: "Weekly strategy call", included: true },
      { text: "CRM integration (all major platforms)", included: true },
      { text: "Qualified meeting briefing notes", included: true },
      { text: "A/B copy testing — unlimited variants", included: true },
      { text: "Live pipeline dashboard", included: true },
      { text: "Reply handling & objection management", included: true },
    ],
    cta: "Book a call",
    ctaClass: "btn btn-warm btn-full btn-lg",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    period: "custom scope + SLA",
    desc: "For companies that need dedicated team capacity, multi territory outreach, or deep integration with existing revenue operations.",
    features: [
      { text: "Unlimited contacts & territory scope", included: true },
      { text: "Dedicated pod (SDR + strategist + data analyst)", included: true },
      { text: "All Growth features, plus:", included: true },
      { text: "Multi territory & multilingual campaigns", included: true },
      { text: "RevOps consulting & CRM buildout", included: true },
      { text: "Executive level stakeholder reporting", included: true },
      { text: "Guaranteed meeting SLA", included: true },
      { text: "Quarterly pipeline review with your board", included: true },
      { text: "White labelling available", included: true },
    ],
    cta: "Talk to sales",
    ctaClass: "btn btn-dark btn-full",
    featured: false,
  },
];

const compareRows = [
  { section: "Outreach channels" },
  { feature: "Email sequences",        starter: true,  growth: true,  enterprise: true },
  { feature: "LinkedIn outreach",      starter: true,  growth: true,  enterprise: true },
  { feature: "Phone / cold calling",   starter: false, growth: true,  enterprise: true },
  { feature: "Multilingual campaigns", starter: false, growth: false, enterprise: true },
  { section: "Data & targeting" },
  { feature: "Contacts built per month", starter: "Up to 500", growth: "Up to 1,500", enterprise: "Unlimited" },
  { feature: "ICP mapping session",    starter: true,  growth: true,  enterprise: true },
  { feature: "Trigger event targeting",starter: false, growth: true,  enterprise: true },
  { feature: "GDPR compliant verification", starter: true, growth: true, enterprise: true },
  { section: "Reporting" },
  { feature: "Monthly reporting call", starter: true,  growth: true,  enterprise: true },
  { feature: "Weekly strategy call",   starter: false, growth: true,  enterprise: true },
  { feature: "Live pipeline dashboard",starter: false, growth: true,  enterprise: true },
  { feature: "Executive board reporting", starter: false, growth: false, enterprise: true },
  { section: "Team & support" },
  { feature: "Account manager",        starter: "Dedicated", growth: "Senior (5+ yrs)", enterprise: "Dedicated pod" },
  { feature: "A/B copy testing",       starter: false, growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Reply handling",         starter: false, growth: true,  enterprise: true },
  { feature: "Guaranteed meeting SLA", starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    q: "How does the performance component work?",
    a: "On top of the monthly retainer, we charge a small fee per qualified meeting delivered — typically £150–£300 depending on deal size and industry. This means our incentives are directly tied to yours. We don't earn more by sending more emails; we earn more by filling your calendar with the right conversations.",
  },
  {
    q: 'What counts as a "qualified" meeting?',
    a: "We agree a qualification criteria with you during onboarding — typically seniority, company size, budget authority, and timeline. A meeting only counts if the prospect meets all agreed criteria and the meeting actually occurs. No-shows and declined meetings don't count toward your performance fees.",
  },
  {
    q: "How long until I see my first meetings?",
    a: "Most clients see their first qualified meetings in weeks two or three. Week one is onboarding, ICP mapping, and list build. Sequences go live in week two. Results vary by industry, deal size, and how tight your ICP is — but we typically aim to cover your retainer cost in qualified pipeline value within the first 30 days.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "Starter is available month to month with 30 days' notice. Growth requires a three month minimum — it takes that long to properly tune messaging and ICP. Enterprise terms are negotiated as part of the engagement. We've never had a client leave because results weren't there; most upgrade instead.",
  },
  {
    q: "Can you work with our existing CRM and tech stack?",
    a: "Yes. We integrate with Salesforce, HubSpot, Pipedrive, Outreach, Salesloft, and most other major CRMs and sequencing tools via native integrations or Zapier. Every lead is automatically logged with full activity context — you'll never be chasing data from us. Growth and Enterprise tiers include integration setup at no extra cost.",
  },
  {
    q: "Do I own the contacts and data you build?",
    a: "Completely. Every contact list, every message thread, every campaign asset is yours from day one. When an engagement ends, we export everything and hand it over in full. We document our process so your internal team — or any future agency — can pick it up and keep running it. We build systems, not dependencies.",
  },
];

const TickIcon = ({ color }: { color: string }) => (
  <svg style={{ display: "inline-block", verticalAlign: "middle", color }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function CellVal({ val }: { val: boolean | string | undefined }) {
  if (val === true)  return <span style={{ color: "var(--color-accent)" }}><TickIcon color="currentColor" /></span>;
  if (val === false) return <span style={{ color: "var(--color-border)", fontSize: 18 }}>—</span>;
  return <span style={{ color: "var(--color-muted)", fontSize: 13 }}>{val}</span>;
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>

      {/* ══ PAGE HERO ══ */}
      <section style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>Pricing</p>
          <h1 style={{ marginBottom: 20 }}>
            Transparent pricing.<br />Real results.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)", maxWidth: 480, margin: "0 auto 40px" }}>
            No retainer traps. No hidden minimums. Three tiers built for where you are now — upgrade as your pipeline scales.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: annual ? "var(--color-muted)" : "var(--color-foreground)" }}>
              Monthly
            </span>
            <label style={{ position: "relative", display: "inline-block", width: 44, height: 24, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={annual}
                onChange={() => setAnnual(!annual)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: "absolute",
                inset: 0,
                background: annual ? "var(--color-accent)" : "var(--color-border)",
                borderRadius: 24,
                transition: "background 0.2s",
              }}>
                <span style={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  left: annual ? 23 : 3,
                  top: 3,
                  background: "white",
                  borderRadius: "50%",
                  transition: "left 0.2s",
                }} />
              </span>
            </label>
            <span style={{ fontSize: 14, fontWeight: 500, color: annual ? "var(--color-foreground)" : "var(--color-muted)" }}>
              Annual{" "}
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "var(--color-accent-bg)",
                color: "var(--color-accent)",
                borderRadius: 4,
                padding: "3px 8px",
                marginLeft: 6,
              }}>
                Save 15%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ══ PRICING CARDS ══ */}
      <section style={{ paddingBottom: 96 }}>
        <div className="wrap">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.featured ? "var(--color-foreground)" : "var(--color-surface)",
                  border: `1px solid ${plan.featured ? "var(--color-foreground)" : "var(--color-border)"}`,
                  borderRadius: 12,
                  padding: "40px 36px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!plan.featured) (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px oklch(17% 0.024 58 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-accent)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: plan.featured ? "oklch(70% 0.018 75)" : "var(--color-muted)",
                  marginBottom: 20,
                }}>
                  {plan.name}
                </div>

                {/* Price */}
                {plan.monthly ? (
                  <div style={{
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 56,
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: plan.featured ? "var(--color-background)" : "var(--color-foreground)",
                    marginBottom: 6,
                  }}>
                    <span style={{ fontFamily: "var(--font-sans), system-ui", fontSize: 20, fontWeight: 600, verticalAlign: "top", marginTop: 10, display: "inline-block" }}>£</span>
                    {annual && plan.annual ? plan.annual : plan.monthly}
                  </div>
                ) : (
                  <div style={{
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 40,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: plan.featured ? "var(--color-background)" : "var(--color-foreground)",
                    marginBottom: 6,
                    paddingTop: 8,
                    paddingBottom: 12,
                  }}>
                    Let&rsquo;s talk
                  </div>
                )}

                <div style={{ fontSize: 13, color: plan.featured ? "oklch(60% 0.018 75)" : "var(--color-muted)", marginBottom: 8 }}>
                  {plan.period}
                </div>

                <p style={{
                  fontSize: 14,
                  color: plan.featured ? "oklch(65% 0.018 75)" : "var(--color-muted)",
                  lineHeight: 1.6,
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: `1px solid ${plan.featured ? "oklch(30% 0.024 58)" : "var(--color-border)"}`,
                }}>
                  {plan.desc}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13, marginBottom: 32, flex: 1 }}>
                  {plan.features.map((feat) => (
                    <li key={feat.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, lineHeight: 1.45 }}>
                      <span style={{
                        display: "block",
                        width: 16,
                        height: 16,
                        flexShrink: 0,
                        marginTop: 1,
                        borderRadius: "50%",
                        background: feat.included
                          ? "var(--color-accent)"
                          : "var(--color-border)",
                        backgroundImage: feat.included
                          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 8l2.5 2.5L12 5.5' stroke='white' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
                          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M5 8h6' stroke='%236B6B6B' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundSize: "contain",
                      }} />
                      <span style={{ color: feat.included
                        ? (plan.featured ? "oklch(82% 0.018 75)" : "var(--color-foreground)")
                        : (plan.featured ? "oklch(42% 0.015 58)" : "var(--color-muted)")
                      }}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={plan.ctaClass} style={{ marginTop: "auto" }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE (desktop only) ══ */}
      <section className="compare-section" style={{ padding: "96px 0", background: "var(--color-surface)" }}>
        <div className="wrap">
          <div className="section-header" style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ textAlign: "center" }}>Full Comparison</p>
            <h2>What&rsquo;s included at each tier.</h2>
          </div>
          <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "16px 24px", textAlign: "left", fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontSize: 15, letterSpacing: "-0.01em" }}>Feature</th>
                  {["Starter", "Growth", "Enterprise"].map((h) => (
                    <th key={h} style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "16px 24px", fontWeight: 600, fontSize: 13, textAlign: "center" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  "section" in row ? (
                    <tr key={i}>
                      <td colSpan={4} style={{
                        background: "var(--color-background)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-muted)",
                        padding: "10px 24px 8px",
                        borderBottom: "1px solid var(--color-border)",
                      }}>
                        {row.section}
                      </td>
                    </tr>
                  ) : (
                    <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <td style={{ padding: "16px 24px", fontWeight: 500, color: "var(--color-foreground)" }}>{row.feature}</td>
                      <td style={{ padding: "16px 24px", textAlign: "center" }}><CellVal val={row.starter} /></td>
                      <td style={{ padding: "16px 24px", textAlign: "center" }}><CellVal val={row.growth} /></td>
                      <td style={{ padding: "16px 24px", textAlign: "center" }}><CellVal val={row.enterprise} /></td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div className="section-header" style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ textAlign: "center" }}>Questions</p>
            <h2>Things people ask before they sign.</h2>
          </div>
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    gap: 24,
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.01em",
                    textAlign: "left",
                  }}
                >
                  {faq.q}
                  <span style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    border: "1px solid var(--color-border)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: openFaq === i ? "var(--color-foreground)" : "transparent",
                    transition: "all 0.2s",
                  }}>
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}
                    >
                      <path d="M7 2v10M2 7h10"
                        stroke={openFaq === i ? "var(--color-background)" : "var(--color-foreground)"}
                        strokeWidth="1.6" strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <p style={{ paddingBottom: 24, fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75, maxWidth: 620 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DARK CTA ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-foreground)" }}>
        <div className="wrap">
          <div className="cta-dark-inner">
            <div>
              <h2 style={{
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--color-background)",
              }}>
                Not sure which plan fits?
              </h2>
              <p style={{ marginTop: 12, fontSize: 16, color: "oklch(70% 0.018 75)", maxWidth: 420 }}>
                Book a 30-minute call and we&rsquo;ll map out exactly what&rsquo;s right for your stage. No pressure, no generic deck — just an honest conversation about your pipeline.
              </p>
            </div>
            <Link href="/contact" className="btn btn-warm btn-lg">Book a discovery call</Link>
          </div>
        </div>
      </section>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        .cta-dark-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
          .compare-section { display: none; }
          .cta-dark-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .faq-q { font-size: 16px; }
        }
      `}</style>
    </div>
  );
}
