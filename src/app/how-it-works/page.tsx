import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "We're your growth partner — embedded in your commercial strategy, accountable for your pipeline, and relentless about the quality of every introduction we make.",
};

const processSteps = [
  {
    num: "Step 01",
    title: "Discovery & alignment",
    body: "We start by understanding your business deeply — your product, value proposition, existing customers, deal sizes, and where your best historical wins came from. No templates. No copy-paste strategy.",
    detail: "In week one we run a structured intake session with your commercial leadership. We map your competitive landscape, review your existing pipeline data, and benchmark your current conversion rates. This becomes the intelligence layer for everything that follows.",
  },
  {
    num: "Step 02",
    title: "ICP mapping & list build",
    body: "We define your ideal customer profile with precision — industry, headcount band, revenue range, tech stack, buying signals, and organisational trigger events that indicate readiness to purchase.",
    detail: "We build verified, GDPR-compliant contact lists using a combination of proprietary data sources, LinkedIn Sales Navigator, and manual research. Every contact is validated before it enters a sequence. We do not buy lists.",
  },
  {
    num: "Step 03",
    title: "Messaging & positioning",
    body: 'We write bespoke copy for every channel — email, LinkedIn, and phone scripts. The messaging is grounded in your buyer\'s world, not generic templates about "synergy" and "disruption."',
    detail: "We run A/B testing on subject lines, openers, and value propositions from day one. Winning variants are scaled; poor performers are retired within the first two weeks. Messaging is a living system, not a one-time brief.",
  },
  {
    num: "Step 04",
    title: "Multi-channel outreach",
    body: "Our team executes across email, LinkedIn, and phone in co-ordinated sequences. We handle replies, objections, and scheduling — your sales team only appears when a prospect is qualified and keen.",
    detail: "We run sequences of 6–9 touchpoints over 21 days. Every negative response is recorded and used to refine targeting. Every positive response is triaged within one business hour. Nothing falls through the cracks.",
  },
  {
    num: "Step 05",
    title: "Qualified handoff & reporting",
    body: "Warm introductions land in your calendar. Each comes with a briefing note — company context, prospect background, conversation summary, and relevant talking points for your meeting.",
    detail: "You receive a live dashboard showing activity metrics (contacts reached, opens, replies), pipeline metrics (meetings booked, no-shows, conversion rates), and financial metrics (pipeline value, cost per meeting). Monthly review calls keep strategy aligned with results.",
  },
];

const differentiators = [
  {
    eyebrow: "Transparency",
    title: "You own everything we build.",
    body: "Every contact list, every message thread, every data point is yours. We document our process so you're never dependent on us. If you leave, you take the system with you — and it keeps working.",
  },
  {
    eyebrow: "Quality First",
    title: "Volume is a vanity metric.",
    body: "We optimise for qualified meetings, not raw activity numbers. A 3% reply rate with 40% conversion to meeting is better than a 12% reply rate that goes nowhere. We track what matters to revenue.",
  },
  {
    eyebrow: "Expert Teams",
    title: "Senior practitioners, not juniors.",
    body: "Every campaign is managed by someone who has run outbound at scale. No account managers shuffling work to interns. The person who pitches you is the person who runs your account.",
  },
  {
    eyebrow: "Partnership",
    title: "We're paid when you win.",
    body: "Our pricing includes a performance component tied to meetings delivered and pipeline generated. Our incentives are aligned with yours — not with the number of emails we can blast in a month.",
  },
];

const integrations = [
  { name: "Salesforce", desc: "CRM sync" },
  { name: "HubSpot",    desc: "Pipeline logging" },
  { name: "Outreach",   desc: "Sequence data" },
  { name: "Pipedrive",  desc: "Deal routing" },
  { name: "Salesloft",  desc: "Activity sync" },
];

export default function HowItWorksPage() {
  return (
    <div>

      {/* ══ PAGE HERO ══ */}
      <div className="wrap">
        <div className="page-hero-grid">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h1 style={{ marginBottom: 24 }}>We&rsquo;re more than a lead gen agency.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)", maxWidth: 440, marginBottom: 36 }}>
              We&rsquo;re your growth partner — embedded in your commercial strategy, accountable for your pipeline, and relentless about the quality of every introduction we make.
            </p>
            <Link href="/contact" className="btn btn-dark btn-lg">Book a discovery call</Link>
          </div>

          {/* Visual placeholder */}
          <div className="hero-img-block">
            <svg width="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="oklch(90% 0.030 70)"/>
              <path d="M40 240 C80 200 120 210 160 170 C200 130 240 90 300 60 L320 80" stroke="oklch(62% 0.110 35)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="300" cy="60" r="6" fill="oklch(62% 0.110 35)"/>
              <path d="M40 260 C100 230 160 240 220 200 C270 165 310 130 360 110" stroke="oklch(74% 0.060 55)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
              <line x1="40" y1="260" x2="380" y2="260" stroke="oklch(82% 0.020 70)" strokeWidth="1"/>
              <line x1="40" y1="220" x2="380" y2="220" stroke="oklch(82% 0.020 70)" strokeWidth="0.5"/>
              <line x1="40" y1="180" x2="380" y2="180" stroke="oklch(82% 0.020 70)" strokeWidth="0.5"/>
              <line x1="40" y1="140" x2="380" y2="140" stroke="oklch(82% 0.020 70)" strokeWidth="0.5"/>
              <rect x="286" y="32" width="80" height="26" rx="4" fill="oklch(17% 0.024 58)" opacity="0.9"/>
              <text x="326" y="49" textAnchor="middle" fill="oklch(96.5% 0.020 76)" fontFamily="system-ui" fontSize="11" fontWeight="600">+35% lift</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ══ PROCESS STEPS ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">The Five-Step Process</p>
              <h2>How we build your pipeline from zero to predictable.</h2>
            </div>
          </Reveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.05}>
                <div className="process-step">
                  <div style={{
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--color-accent)",
                    paddingTop: 6,
                  }}>
                    {step.num}
                  </div>
                  <div className="pstep-body">
                    <div>
                      <h3 style={{ fontSize: 26, marginBottom: 14 }}>{step.title}</h3>
                      <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75 }}>{step.body}</p>
                    </div>
                    <div style={{
                      fontSize: 14,
                      color: "var(--color-muted)",
                      lineHeight: 1.7,
                      borderLeft: "2px solid var(--color-border)",
                      paddingLeft: 20,
                    }}>
                      {step.detail}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFFERENTIATORS ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">What Sets Us Apart</p>
              <h2>The principles we operate by.</h2>
            </div>
          </Reveal>
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div style={{ background: "var(--color-surface)", padding: "44px 40px" }}>
                  <p className="eyebrow">{d.eyebrow}</p>
                  <h3 style={{ marginBottom: 12 }}>{d.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTEGRATIONS ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Integrations</p>
              <h2>Works with the stack you already have.</h2>
              <p>Every lead is automatically logged, scored, and routed into your CRM. No manual data entry. No double-handling.</p>
            </div>
          </Reveal>
          <div className="int-grid">
            {integrations.map((int) => (
              <div key={int.name} style={{
                background: "var(--color-surface)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                }}>
                  {int.name}
                </div>
                <p style={{ fontSize: 12, color: "var(--color-muted)" }}>{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DARK CTA ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-foreground)" }}>
        <div className="wrap">
          <h2 style={{
            fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
            fontSize: "clamp(30px, 3.5vw, 50px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--color-background)",
            marginBottom: 12,
          }}>
            Ready to see the system in action?
          </h2>
          <p style={{ fontSize: 16, color: "oklch(70% 0.018 75)", maxWidth: 440, marginBottom: 32 }}>
            Book a 30-minute call. We&rsquo;ll walk you through a live example of a campaign we ran in your industry and show you exactly what results to expect.
          </p>
          <Link href="/contact" className="btn btn-warm btn-lg">Book a discovery call</Link>
        </div>
      </section>

      <style>{`
        .page-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          padding: 80px 0 96px;
        }
        .hero-img-block {
          aspect-ratio: 4/3;
          background: var(--color-surface);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .process-step {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 0;
          padding: 48px 0;
          border-bottom: 1px solid var(--color-border);
          align-items: start;
        }
        .pstep-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }
        .int-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-img-block { display: none; }
        }
        @media (max-width: 768px) {
          .process-step { grid-template-columns: 1fr; gap: 4px; }
          .pstep-body { grid-template-columns: 1fr; gap: 16px; }
          .diff-grid { grid-template-columns: 1fr; }
          .int-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .int-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
