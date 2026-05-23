"use client";

import Link from "next/link";
import { Reveal, ScaleIn } from "@/components/Motion";
import { SavingsCalculator } from "@/components/ProductWidgets";


const services = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <circle cx="9" cy="9" r="6.5"/>
        <path d="M9 5.5v3.5l2 2"/>
      </svg>
    ),
    title: "Outbound Lead Generation",
    body: "Targeted, personalised outreach sequences to your ideal customers across email, LinkedIn, and phone — managed entirely by our team.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <circle cx="7" cy="7" r="4.5"/>
        <path d="M15 15l-3.5-3.5"/>
      </svg>
    ),
    title: "ICP & Market Mapping",
    body: "Deep research into your addressable market — identifying the right contacts, companies, and timing signals before a single message is sent.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <path d="M3 5h12M3 9h8M3 13h10"/>
      </svg>
    ),
    title: "Messaging & Copy",
    body: "Bespoke positioning and copy for every channel. We write to your buyer's priorities — never generic templates.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <path d="M3 13.5l4-4 3 3 5-6"/>
      </svg>
    ),
    title: "Pipeline Reporting",
    body: "Realtime dashboards showing opens, replies, meetings booked, and pipeline value — full transparency on what's working.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <circle cx="6.5" cy="6.5" r="3"/>
        <path d="M12 15a4 4 0 0 0-7.8 0"/>
        <path d="M14.5 9.5a2.5 2.5 0 1 0 0-5"/>
      </svg>
    ),
    title: "SDR as a Service",
    body: "A fully embedded, dedicated SDR function without the overhead of hiring. Ramp in weeks, not months, with zero onboarding risk.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--color-accent)" strokeWidth="1.4">
        <rect x="2" y="4" width="14" height="11" rx="1.5"/>
        <path d="M5 4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1"/>
      </svg>
    ),
    title: "CRM Integration",
    body: "Seamless sync with Salesforce, HubSpot, Pipedrive, and others — every lead logged, scored, and routed automatically.",
  },
];

const comparisonRows = [
  { feature: "Provides fresh leads",                  lh: "Yes", mc: "No",      ml: "No",   br: "No",      eo: "No",  negative: false },
  { feature: "Sends the outreach for you",             lh: "Yes", mc: "No",      ml: "No",   br: "No",      eo: "No",  negative: false },
  { feature: "Plain English reporting",                lh: "Yes", mc: "No",      ml: "No",   br: "No",      eo: "No",  negative: false },
  { feature: "Charges per contact",                   lh: "No",  mc: "Yes",     ml: "Yes",  br: "Partial", eo: "Yes", negative: true  },
  { feature: "Hidden fees for unsubscribed contacts", lh: "No",  mc: "Yes",     ml: "No",   br: "No",      eo: "No",  negative: true  },
  { feature: "Bring your own list required",          lh: "No",  mc: "Yes",     ml: "Yes",  br: "Yes",     eo: "Yes", negative: true  },
];

const GREEN = "oklch(35% 0.10 155)";
const RED   = "oklch(50% 0.18 22)";

const TickIcon = ({ color }: { color: string }) => (
  <svg style={{ display: "inline-block", verticalAlign: "middle", color }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = ({ color }: { color: string }) => (
  <svg style={{ display: "inline-block", verticalAlign: "middle", color }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const checkCell = (val: string, isLeadHaus: boolean, negative: boolean) => {
  if (isLeadHaus) {
    // LeadHaus is always the winner — green tick regardless of Yes/No
    return <TickIcon color={GREEN} />;
  }

  if (val === "Partial") {
    return <span style={{ color: "var(--color-muted)", fontSize: 12 }}>Partial</span>;
  }

  const isBad = negative ? val === "Yes" : val === "No";

  if (isBad) {
    return (
      <CrossIcon color={RED} />
    );
  }

  // Competitor has the positive value (e.g. they do provide this feature)
  return <TickIcon color={GREEN} />;
};

export default function HomePage() {
  return (
    <div>

      {/* ══ HERO ══ */}
      <section className="hero-video-section">
        {/* Full-bleed background video */}
        <video
          src="/hero-handshake.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-video-bg"
        />
        {/* Gradient scrim so text is legible */}
        <div className="hero-video-scrim" />
        {/* Text overlay */}
        <div className="wrap hero-video-content">
          <p className="eyebrow eyebrow-light">Premium B2B Lead Generation</p>
          <h1 className="hero-video-h1">
            Quality Leads.<br />Real Growth.
          </h1>
          <p className="hero-video-sub">
            We help established B2B companies build consistent, high-quality pipelines — so your sales team can focus on closing, not chasing.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-warm btn-lg">Book a discovery call</Link>
            <Link href="/how-it-works" className="btn btn-ghost-light btn-lg">See how it works</Link>
          </div>
        </div>
      </section>

      {/* ══ LOGOS ══ */}
      <section style={{ padding: "48px 0 64px", borderTop: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 28 }}>
            Trusted by growth teams at
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {["Salesforce", "Meta Ads", "HubSpot", "LinkedIn Sales", "Outreach"].map((name) => (
              <span key={name} className="logo-mark">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div className="stats-grid">
            {[
              { n: "250+", l: "Clients across 14 industries" },
              { n: "2M+",  l: "Qualified leads delivered" },
              { n: "35%",  l: "Average pipeline lift in 90 days" },
            ].map((stat) => (
              <div key={stat.n} style={{ background: "var(--color-surface)", padding: "52px 40px", textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                  fontSize: "clamp(52px, 5.5vw, 76px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "var(--color-foreground)",
                  marginBottom: 8,
                }}>
                  {stat.n}
                </div>
                <div style={{ fontSize: 14, color: "var(--color-muted)", fontWeight: 500 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">The System</p>
              <h2>A proven system for predictable growth.</h2>
              <p>We replace guesswork with a repeatable, data driven process — from ICP mapping to qualified introductions delivered to your calendar.</p>
            </div>
          </Reveal>

          <div className="steps-grid">
            {[
              { n: "01", title: "Target", body: "We define your ideal customer profile with surgical precision — industry, headcount, revenue, buying signals, and trigger events that indicate readiness." },
              { n: "02", title: "Engage", body: "Our team runs multichannel outreach across email, LinkedIn, and phone — using sequencing logic refined across 250+ live campaigns." },
              { n: "03", title: "Deliver", body: "Warm, qualified introductions land in your calendar. Decision makers who've expressed interest, verified in role, ready for a real conversation." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 56,
                    fontWeight: 900,
                    color: "var(--color-border)",
                    lineHeight: 1,
                    marginBottom: 16,
                    letterSpacing: "-0.04em",
                  }}>
                    {step.n}
                  </div>
                  <h3 style={{ marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <Link href="/how-it-works" className="btn btn-outline">Full process breakdown →</Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding: "96px 0", background: "var(--color-surface)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Services</p>
              <h2>Lead generation services that deliver.</h2>
            </div>
          </Reveal>
          <div className="services-grid">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.06}>
                <div className="svc-card">
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1.5px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: 19, marginBottom: 10 }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7 }}>{svc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div className="testi-grid">
            <div>
              <div style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "var(--color-accent-bg)",
                border: "2px solid var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--color-accent)",
                marginBottom: 16,
              }}>
                MR
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 4 }}>Marcus Reid</div>
              <div style={{ fontSize: 13, color: "var(--color-muted)" }}>VP Sales, Meridian Capital</div>
            </div>
            <blockquote style={{
              fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
              fontSize: "clamp(22px, 2.5vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.4,
              color: "var(--color-foreground)",
              letterSpacing: "-0.01em",
              borderLeft: "3px solid var(--color-accent)",
              paddingLeft: 32,
            }}>
              &ldquo;LeadHaus gave us 47 qualified meetings in the first 60 days. Our previous agency took six months to get half that. The quality of contact — title, timing, context — was in another league entirely.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Comparing options</p>
              <h2>What you actually get for your money.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, textAlign: "left" }}>
                <thead>
                  <tr>
                    <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "16px 24px", fontWeight: 600, fontSize: 13 }}>Feature</th>
                    {["LeadHaus", "Mailchimp", "MailerLite", "Brevo", "EmailOctopus"].map((h, i) => (
                      <th key={h} style={{
                        background: i === 0 ? "var(--color-foreground)" : "var(--color-foreground)",
                        color: i === 0 ? "var(--color-accent)" : "var(--color-background)",
                        padding: "16px 24px",
                        fontWeight: i === 0 ? 700 : 500,
                        fontSize: 13,
                        textAlign: "center",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="compare-row" style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "14px 24px", fontWeight: 500, color: "var(--color-foreground)" }}>{row.feature}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center", background: "oklch(59% 0.130 34 / 0.05)", fontWeight: 700 }}>{checkCell(row.lh, true,  row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.mc, false, row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.ml, false, row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.br, false, row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.eo, false, row.negative)}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "var(--color-background)", fontWeight: 600 }}>
                    <td style={{ padding: "14px 24px", color: "var(--color-foreground)" }}>Starting monthly price for 25,000 contacts</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-accent)", background: "oklch(59% 0.130 34 / 0.05)" }}>£497</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>$270</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>$145</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>$69 to $499</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>$36</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 16, fontSize: 12, color: "var(--color-muted)", lineHeight: 1.65, maxWidth: 720 }}>
              Prices for competitors verified April 2026 from each provider&rsquo;s published rates. They charge less for sending alone because that is all they do. LeadHaus includes the lead generation, the sending, and the reporting as one fixed price.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ COST CALCULATOR ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Reveal>
              <div className="section-header" style={{ textAlign: "center" }}>
                <p className="eyebrow" style={{ textAlign: "center" }}>Cost calculator</p>
                <h2>Compare your options</h2>
              </div>
            </Reveal>
            <ScaleIn delay={0.1}>
              <div style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 4,
              }}>
                <SavingsCalculator />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ══ DARK CTA STRIP ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-foreground)" }}>
        <div className="wrap">
          <div className="cta-dark-grid">
            <div>
              <h2 style={{
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--color-background)",
              }}>
                Let&rsquo;s build your pipeline.
              </h2>
              <p style={{ marginTop: 12, fontSize: 16, color: "oklch(70% 0.018 75)", maxWidth: 420 }}>
                Book a 30 minute discovery call and leave with a clear view of where your next 50 meetings are coming from.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 272 }}>
              <input
                type="email"
                placeholder="Work email address"
                style={{
                  padding: "12px 16px",
                  border: "1px solid oklch(35% 0.020 58)",
                  borderRadius: 8,
                  background: "oklch(24% 0.020 58)",
                  color: "var(--color-background)",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                }}
              />
              <Link href="/contact" className="btn btn-warm">Book discovery call</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .logo-mark {
          font-family: var(--font-serif), 'Iowan Old Style', Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--color-border);
          letter-spacing: -0.01em;
          transition: color 0.2s;
          cursor: default;
        }
        .logo-mark:hover { color: var(--color-muted); }
        .compare-row:hover td { background: var(--color-background); }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: var(--color-border);
          gap: 1px;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 52px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: var(--color-border);
          gap: 1px;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .svc-card {
          background: var(--color-surface);
          padding: 40px 36px;
          transition: background 0.2s;
        }
        .svc-card:hover { background: var(--color-background); }
        .testi-grid {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 80px;
          align-items: start;
        }
        .cta-dark-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
        }
        /* ── Full-bleed video hero ── */
        .hero-video-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
        }
        .hero-video-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            oklch(12% 0.025 55 / 0.78) 0%,
            oklch(12% 0.025 55 / 0.55) 45%,
            oklch(12% 0.025 55 / 0.10) 75%,
            transparent 100%
          );
        }
        .hero-video-content {
          position: relative;
          z-index: 2;
          padding-top: 100px;
          padding-bottom: 100px;
          max-width: 620px;
        }
        .eyebrow-light {
          color: oklch(85% 0.08 55) !important;
        }
        .hero-video-h1 {
          font-family: var(--font-serif), 'Iowan Old Style', Georgia, serif;
          font-size: clamp(52px, 6vw, 88px);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.0;
          color: #fff;
          margin-bottom: 28px;
        }
        .hero-video-sub {
          font-size: 18px;
          line-height: 1.65;
          color: oklch(90% 0.015 55);
          max-width: 480px;
          margin-bottom: 40px;
        }
        .btn-ghost-light {
          background: transparent;
          border: 1.5px solid oklch(100% 0 0 / 0.5);
          color: #fff;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-ghost-light:hover {
          background: oklch(100% 0 0 / 0.12);
          border-color: oklch(100% 0 0 / 0.8);
        }
        @media (max-width: 768px) {
          .hero-video-section { min-height: 80vh; }
          .hero-video-content { max-width: 100%; }
          .hero-video-scrim {
            background: oklch(12% 0.025 55 / 0.65);
          }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .steps-grid { grid-template-columns: 1fr; gap: 40px; }
          .testi-grid { grid-template-columns: 1fr; gap: 36px; }
          .cta-dark-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
