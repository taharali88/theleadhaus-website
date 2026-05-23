"use client";

import Link from "next/link";
import { Reveal } from "@/components/Motion";

const processSteps = [
  {
    num: "Step 01",
    title: "Pick your plan",
    body: "You choose a plan based on the level of service you need, not on contact volume. Pricing is fixed and predictable. You will never receive a surprise bill because your audience grew.",
  },
  {
    num: "Step 02",
    title: "Complete the onboarding questionnaire",
    body: "A guided form takes about twenty minutes to complete. You tell us who you sell to, the geographies you serve, the size of business you work best with, and the language your buyers use. The more specific you are, the better the leads. We will follow up with one short call if anything needs clarifying.",
  },
  {
    num: "Step 03",
    title: "We build your audience",
    body: "Within seven days of completing onboarding, your initial database is live and growing. For business audiences we scrape verified contact data from public sources including Companies House, professional directories, and industry registries. For consumer audiences we monitor public intent signals including HM Land Registry filings, planning permission notices, and active social conversations. Every contact is cleaned, validated, and exclusive to you. No reseller data. No list that has been used elsewhere.",
  },
  {
    num: "Step 04",
    title: "Outreach begins",
    body: "We send your campaigns from our infrastructure on your behalf. Daily volume is throttled to protect your sender reputation. Sequences adapt based on recipient behaviour. Replies and bookings come directly to your inbox.",
  },
  {
    num: "Step 05",
    title: "You receive enquiries",
    body: "The first replies typically arrive within seven to ten days of campaigns going live. Each Monday morning you receive a plain English summary showing the previous week's activity and what we recommend changing. That is the entire workflow. You never log into a sending tool. You never touch a spreadsheet. You receive enquiries.",
  },
];

/* ═══════════════════════════════════════════════════
   ONBOARDING FORM STEP 2 MOCKUP
   ═══════════════════════════════════════════════════ */
function OnboardingFormMockup() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 480,
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: 12,
      boxShadow: "0 10px 30px oklch(17% 0.024 58 / 0.05)",
      overflow: "hidden",
      textAlign: "left"
    }}>
      {/* Top browser bar */}
      <div style={{
        padding: "12px 16px",
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
        </div>
        <div style={{
          flex: 1,
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 4,
          padding: "2px 8px",
          fontSize: 11,
          color: "var(--color-muted)"
        }}>
          app.leadhaus.io/onboarding
        </div>
      </div>

      {/* Onboarding form card */}
      <div style={{ padding: 24 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", marginBottom: 6 }}>
          Step 2 of 6: Target Audience
        </div>
        <h4 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 16 }}>
          Who do you sell to?
        </h4>

        {/* B2B vs B2C Selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <div style={{
            flex: 1,
            padding: "8px 12px",
            border: "2px solid var(--color-accent)",
            background: "var(--color-accent-bg)",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--color-accent)",
            textAlign: "center"
          }}>
            B2B Services
          </div>
          <div style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid var(--color-border)",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 500,
            color: "var(--color-muted)",
            textAlign: "center"
          }}>
            B2C Consumers
          </div>
        </div>

        {/* Dropdowns */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 6 }}>Target Geography</label>
            <div style={{ padding: "8px 12px", border: "1px solid var(--color-border)", background: "var(--color-background)", borderRadius: 6, fontSize: 12, color: "var(--color-foreground)" }}>
              London and South East England
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 6 }}>Decision Maker Job Titles</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["CEO", "Founder", "Managing Director"].map((title) => (
                <span key={title} style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  padding: "4px 8px",
                  borderRadius: 4
                }}>
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div>
      {/* ══ PAGE HERO ══ */}
      <section style={{ padding: "80px 0 96px", background: "var(--color-background)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="page-hero-grid">
            <div>
              <p className="eyebrow">Our Process</p>
              <h1 style={{
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.08,
                color: "var(--color-foreground)",
                marginBottom: 24
              }}>
                From sign up to first enquiry in fourteen days.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-body)", marginBottom: 36 }}>
                A straightforward five step process. Nothing for you to learn. Nothing for you to install.
              </p>
              <Link href="/contact" className="btn btn-warm btn-lg">Book a call</Link>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <OnboardingFormMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS STEPS ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-background)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <p className="eyebrow">The Five Step Process</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }}>How we build your pipeline from zero to active.</h2>
            </div>
          </Reveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {processSteps.map((step) => (
              <Reveal key={step.num}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 32,
                  padding: "40px 0",
                  borderBottom: "1px solid var(--color-border)"
                }} className="page-hero-grid">
                  <div style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--color-accent)"
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 12 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACCOUNTABILITY & OWNERSHIP ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Accountability</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }}>Ownership and weekly summaries.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="page-hero-grid">
            <Reveal>
              <div style={{ background: "var(--color-background)", padding: "44px 40px", border: "1px solid var(--color-border)", borderRadius: 12, height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 16 }}>
                  What you receive every week
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                  A dashboard showing live counts of leads in your database, leads added this week, messages sent, opens, clicks, replies, unsubscribes, and bookings. The same data summarised in a Monday morning email so you do not have to log in to know what is happening.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div style={{ background: "var(--color-background)", padding: "44px 40px", border: "1px solid var(--color-border)", borderRadius: 12, height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 16 }}>
                  What you own
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                  Every lead generated for your business is yours. If you cancel after the minimum term, the database goes with you. We bin bounces continuously to keep your database clean, and we top up to maintain the volume your plan covers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }
      `}</style>
    </div>
  );
}
