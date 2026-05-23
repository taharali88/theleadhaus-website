"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: "497",
    upfront: "2,386",
    saving: "596",
    period: "per month",
    desc: "For local service businesses, solo operators, single service offerings.",
    features: [
      { text: "Up to two outreach channels (email plus one intent monitor)", included: true },
      { text: "Onboarding questionnaire and audience build", included: true },
      { text: "Fresh leads generated weekly, exclusive to your business", included: true },
      { text: "Full outreach sent from our infrastructure", included: true },
      { text: "Weekly Monday morning summary", included: true },
      { text: "Live dashboard access", included: true },
      { text: "Bounce binning and database maintenance", included: true },
      { text: "Email support, response within two working days", included: true },
    ],
    cta: "Choose Starter",
    ctaClass: "btn btn-outline btn-full",
    featured: false,
  },
  {
    name: "Growth",
    monthly: "997",
    upfront: "4,786",
    saving: "1,196",
    period: "per month",
    desc: "For established small businesses, multi service operations, scaling consultancies.",
    features: [
      { text: "Up to four outreach channels (B2B email, intent monitoring, social engagement, Land Registry or Companies House triggers)", included: true },
      { text: "Custom audience segmentation by job title, industry, geography, or life event", included: true },
      { text: "Monthly thirty minute strategy call", included: true },
      { text: "Priority support, response within one working day", included: true },
      { text: "Behavioural sequence optimisation", included: true },
      { text: "Includes all Starter features", included: true },
    ],
    cta: "Choose Growth",
    ctaClass: "btn btn-warm btn-full btn-lg",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    monthly: "1,997",
    upfront: "9,586",
    saving: "2,396",
    period: "per month",
    desc: "For agencies serving their own clients, businesses with multiple service lines, operations requiring custom integrations.",
    features: [
      { text: "All outreach channels enabled", included: true },
      { text: "Dedicated onboarding call with the founder", included: true },
      { text: "Weekly strategy call", included: true },
      { text: "Custom API integration with your existing CRM or systems", included: true },
      { text: "Same day support", included: true },
      { text: "Bespoke campaign design", included: true },
      { text: "Includes all Growth features", included: true },
    ],
    cta: "Choose Scale",
    ctaClass: "btn btn-dark btn-full",
    featured: false,
  },
];

const compareRows = [
  { section: "Outreach channels" },
  { feature: "Outreach channels count", starter: "Up to 2", growth: "Up to 4", enterprise: "All channels" },
  { feature: "B2B email campaign", starter: true, growth: true, enterprise: true },
  { feature: "Intent monitoring", starter: true, growth: true, enterprise: true },
  { feature: "Social engagement", starter: false, growth: true, enterprise: true },
  { feature: "Land Registry triggers", starter: false, growth: true, enterprise: true },
  { feature: "Companies House triggers", starter: false, growth: true, enterprise: true },
  { section: "Data & targeting" },
  { feature: "Weekly lead generation", starter: true, growth: true, enterprise: true },
  { feature: "Exclusive leads (no resale)", starter: true, growth: true, enterprise: true },
  { feature: "Audience segmentation", starter: false, growth: true, enterprise: true },
  { feature: "Bespoke campaign design", starter: false, growth: false, enterprise: true },
  { section: "Support & reporting" },
  { feature: "Weekly Monday summary", starter: true, growth: true, enterprise: true },
  { feature: "Live dashboard access", starter: true, growth: true, enterprise: true },
  { feature: "Support response SLA", starter: "2 working days", growth: "1 working day", enterprise: "Same day" },
  { feature: "Strategy calls", starter: "None", growth: "Monthly (30 min)", enterprise: "Weekly" },
  { feature: "Onboarding call with founder", starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    q: "Why is there a six month minimum commitment?",
    a: "Lead generation works on compounding patterns. The first month builds the foundation, the second month optimises the sequences, and the third month onwards is when meaningful response volume arrives. A shorter commitment would not give the system enough time to produce the results you signed up for.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes within fourteen days of sign up under UK consumer law. After fourteen days the six month minimum commitment applies.",
  },
  {
    q: "What happens after six months?",
    a: "You move to a rolling monthly basis. You may cancel at any point with thirty days notice. We give you a clean export of your entire database when you leave.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The price you see is the price you pay. There are no charges for unsubscribed contacts, no overage fees, no per email costs, no add on charges.",
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

const planPricing: Record<string, Record<string, { symbol: string; monthly: string; upfront: string; saving: string }>> = {
  Starter: {
    GBP: { symbol: "£", monthly: "497", upfront: "2,386", saving: "596" },
    USD: { symbol: "$", monthly: "597", upfront: "2,866", saving: "716" },
    EUR: { symbol: "€", monthly: "577", upfront: "2,766", saving: "696" },
  },
  Growth: {
    GBP: { symbol: "£", monthly: "997", upfront: "4,786", saving: "1,196" },
    USD: { symbol: "$", monthly: "1,197", upfront: "5,746", saving: "1,436" },
    EUR: { symbol: "€", monthly: "1,157", upfront: "5,556", saving: "1,386" },
  },
  Scale: {
    GBP: { symbol: "£", monthly: "1,997", upfront: "9,586", saving: "2,396" },
    USD: { symbol: "$", monthly: "2,397", upfront: "11,506", saving: "2,876" },
    EUR: { symbol: "€", monthly: "2,317", upfront: "11,126", saving: "2,776" },
  },
};

export default function PricingPage() {
  const [upfront, setUpfront] = useState(false);
  const [currency, setCurrency] = useState<"GBP" | "USD" | "EUR">("GBP");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>

      {/* ══ PAGE HERO ══ */}
      <section style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>Pricing</p>
          <h1 style={{ marginBottom: 20 }}>
            One fixed price every month. No surprises.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)", maxWidth: 640, margin: "0 auto 40px" }}>
            Three plans. Pick the one that matches the level of service your business needs. Every plan includes lead generation, full outreach delivery, weekly reporting, and the live dashboard.
          </p>

          {/* Currency toggle */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
            {(["GBP", "USD", "EUR"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                style={{
                  background: currency === curr ? "var(--color-accent)" : "var(--color-surface)",
                  color: currency === curr ? "white" : "var(--color-foreground)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 6,
                  padding: "6px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Billing toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: upfront ? "var(--color-muted)" : "var(--color-foreground)" }}>
              Monthly
            </span>
            <label style={{ position: "relative", display: "inline-block", width: 44, height: 24, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={upfront}
                onChange={() => setUpfront(!upfront)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: "absolute",
                inset: 0,
                background: upfront ? "var(--color-accent)" : "var(--color-border)",
                borderRadius: 24,
                transition: "background 0.2s",
              }}>
                <span style={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  left: upfront ? 23 : 3,
                  top: 3,
                  background: "white",
                  borderRadius: "50%",
                  transition: "left 0.2s",
                }} />
              </span>
            </label>
            <span style={{ fontSize: 14, fontWeight: 500, color: upfront ? "var(--color-foreground)" : "var(--color-muted)" }}>
              Six months upfront{" "}
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
                Save 20%
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
                <div style={{
                  fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                  fontSize: 56,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: plan.featured ? "var(--color-background)" : "var(--color-foreground)",
                  marginBottom: 6,
                }}>
                  <span style={{ fontFamily: "var(--font-sans), system-ui", fontSize: 20, fontWeight: 600, verticalAlign: "top", marginTop: 10, display: "inline-block" }}>
                    {planPricing[plan.name][currency].symbol}
                  </span>
                  {upfront ? planPricing[plan.name][currency].upfront : planPricing[plan.name][currency].monthly}
                </div>

                <div style={{ fontSize: 13, color: plan.featured ? "oklch(60% 0.018 75)" : "var(--color-muted)", marginBottom: 8 }}>
                  {upfront ? `for six months upfront (saves ${planPricing[plan.name][currency].symbol}${planPricing[plan.name][currency].saving})` : plan.period}
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
            <h2>What is included at each tier.</h2>
          </div>
          <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "16px 24px", textAlign: "left", fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontSize: 15, letterSpacing: "-0.01em" }}>Feature</th>
                  {["Starter", "Growth", "Scale"].map((h) => (
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

      {/* ══ EXTRAS SECTION ══ */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
        <div className="wrap page-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>What is not in the price.</h3>
            <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75 }}>
              There are no add ons. There are no surcharges for unsubscribed contacts the way Mailchimp bills them. There are no overage fees if your campaigns perform well and generate more responses than expected. The price you see is the price you pay every month.
            </p>
            <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75, marginTop: 16 }}>
              Your card is billed on the day you sign up and on the same date every month thereafter, or once for six months if you choose the upfront option. The minimum commitment is six months. After the minimum term, you may cancel at any time with thirty days notice.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Fourteen day cooling off period.</h3>
            <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75 }}>
              Under UK consumer law, you have fourteen days from the date of sign up to cancel and receive a full refund. After fourteen days, the six month minimum commitment applies.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
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
                Book a 20 minute call and we&rsquo;ll map out exactly what&rsquo;s right for your stage. No pressure, no generic deck — just an honest conversation about your pipeline.
              </p>
            </div>
            <Link href="/contact" className="btn btn-warm btn-lg">Book a call</Link>
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
