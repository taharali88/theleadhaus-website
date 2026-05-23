"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Reveal, ScaleIn } from "@/components/Motion";

const comparisonRows = [
  { feature: "Live custom sourced leads",             lh: "Yes", sl: "No",  ll: "No",  mc: "No",  negative: false },
  { feature: "Outreach sent on your behalf",          lh: "Yes", sl: "No",  ll: "No",  mc: "No",  negative: false },
  { feature: "No technical setup or DNS config",      lh: "Yes", sl: "No",  ll: "No",  mc: "No",  negative: false },
  { feature: "No sending software to manage",         lh: "Yes", sl: "No",  ll: "No",  mc: "No",  negative: false },
  { feature: "Weekly plain English reports",          lh: "Yes", sl: "No",  ll: "No",  mc: "No",  negative: false },
  { feature: "No seat fees for team members",         lh: "Yes", sl: "Yes", ll: "No",  mc: "Yes", negative: false },
];

const GREEN = "oklch(59% 0.130 34)"; // rust/accent for positive
const RED   = "oklch(47% 0.020 58)"; // muted brown for negative

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

const checkCell = (val: string, isLeadhaus: boolean, negative: boolean) => {
  if (isLeadhaus) {
    return <TickIcon color={GREEN} />;
  }

  if (val === "Partial") {
    return <span style={{ color: "var(--color-muted)", fontSize: 13, fontWeight: 500 }}>Partial</span>;
  }

  const isBad = negative ? val === "Yes" : val === "No";

  if (isBad) {
    return <CrossIcon color={RED} />;
  }

  return <TickIcon color={GREEN} />;
};

/* ═══════════════════════════════════════════════════
   HIGH FIDELITY OUTBOUND COCKPIT MOCKUP
   ═══════════════════════════════════════════════════ */
function OutboundCockpitMockup() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 960,
      margin: "48px auto 0",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: 12,
      boxShadow: "0 12px 40px oklch(17% 0.024 58 / 0.06)",
      overflow: "hidden",
      textAlign: "left"
    }}>
      {/* Browser window header */}
      <div style={{
        padding: "14px 20px",
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
        gap: 16
      }}>
        {/* Window controls */}
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "oklch(80% 0.02 58)" }} />
        </div>
        {/* Address bar */}
        <div style={{
          flex: 1,
          maxWidth: 480,
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 6,
          padding: "4px 12px",
          fontSize: 12,
          fontFamily: "var(--font-sans), monospace",
          color: "var(--color-body)",
          display: "flex",
          alignItems: "center",
          gap: 6
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: "var(--color-accent)" }}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          app.leadhaus.io/dashboard
        </div>
      </div>

      {/* Main workspace layout */}
      <div style={{ display: "flex", minHeight: 440 }}>
        {/* Left app navigation */}
        <div style={{
          width: 180,
          borderRight: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          padding: "20px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 20
        }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, color: "var(--color-foreground)", paddingLeft: 6 }}>
            Leadhaus
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { name: "Dashboard", active: true },
              { name: "Sourced Leads", active: false },
              { name: "Campaigns", active: false },
              { name: "Monday Reports", active: false },
              { name: "Settings", active: false }
            ].map((tab) => (
              <div key={tab.name} style={{
                fontSize: 12,
                fontWeight: tab.active ? 600 : 500,
                color: tab.active ? "var(--color-accent)" : "var(--color-body)",
                padding: "8px 10px",
                borderRadius: 6,
                background: tab.active ? "var(--color-accent-bg)" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "default"
              }}>
                {tab.active && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent)" }} />}
                {tab.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right dashboard area */}
        <div style={{ flex: 1, padding: 24, background: "var(--color-surface)" }}>
          {/* KPI metrics row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            {[
              { label: "Total Leads", val: "237,000", sub: "Exclusive database" },
              { label: "Sourced Daily", val: "30,000", sub: "Fresh live additions" },
              { label: "Average Open Rate", val: "42%", sub: "Campaign performance" },
              { label: "Deliverability", val: "77%", sub: "Monitored infrastructure" }
            ].map((kpi) => (
              <div key={kpi.label} style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                padding: 16
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{kpi.label}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, color: "var(--color-foreground)", margin: "4px 0 2px" }}>{kpi.val}</div>
                <div style={{ fontSize: 10, color: "var(--color-muted)" }}>{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Sourced leads & Inbox logs grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 }}>
            {/* Sourced leads feed */}
            <div style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 16
            }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 12 }}>Sourced live this week</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { name: "James Mitchell", title: "Managing Director", company: "Apex Group", trigger: "New incorporation" },
                  { name: "Sarah Chen", title: "VP Sales", company: "Meridian Capital", trigger: "Planning portal filing" },
                  { name: "David Park", title: "Operations Director", company: "Westbridge Ltd", trigger: "Land Registry filing" }
                ].map((lead, i) => (
                  <div key={i} style={{
                    background: "var(--color-surface)",
                    padding: "10px 12px",
                    border: "1px solid var(--color-border)",
                    borderRadius: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 11
                  }}>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-foreground)" }}>{lead.name}</div>
                      <div style={{ color: "var(--color-muted)", fontSize: 10 }}>{lead.title} at {lead.company}</div>
                    </div>
                    <span style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      background: "var(--color-accent-bg)",
                      padding: "2px 6px",
                      borderRadius: 4
                    }}>
                      {lead.trigger}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Inbox replies feed */}
            <div style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 16
            }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 12 }}>Unified Master Inbox</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { sender: "James Mitchell", text: "Yes, we are looking for a GDPR compliant solution. Let's speak Wednesday." },
                  { sender: "Sarah Chen", text: "This is perfect timing. Let's get a call booked." }
                ].map((reply, i) => (
                  <div key={i} style={{
                    background: "var(--color-surface)",
                    padding: "10px 12px",
                    border: "1px solid var(--color-border)",
                    borderRadius: 6,
                    fontSize: 11
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                      <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>{reply.sender}</span>
                      <span style={{ fontSize: 9, color: "var(--color-muted)" }}>Just now</span>
                    </div>
                    <div style={{ color: "var(--color-body)", lineHeight: 1.4, fontSize: 10, fontStyle: "italic" }}>
                      &ldquo;{reply.text}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive lead generator component
function LiveLeadScanner() {
  const [industry, setIndustry] = useState("recruitment");
  const [state, setState] = useState<"idle" | "scanning" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");

  const sampleLeads: Record<string, Array<{ name: string; role: string; company: string; trigger: string; location: string }>> = {
    recruitment: [
      { name: "David Vance", role: "Managing Director", company: "Apex Tech Talent", trigger: "Registered new business entity and renting office", location: "London" },
      { name: "Sarah Jenkins", role: "Operations Director", company: "Vanguard Recruitment", trigger: "Posted twelve vacancies for senior recruiters on LinkedIn", location: "London" },
      { name: "Marcus Stone", role: "Founder", company: "Stone and Partners", trigger: "Acquired second office lease in the city", location: "Manchester" }
    ],
    accountancy: [
      { name: "Clara Reynolds", role: "Senior Partner", company: "Reynolds Accounting", trigger: "Upgraded HMRC tax portal credentials and hiring", location: "Birmingham" },
      { name: "Thomas Sterling", role: "Practice Manager", company: "Sterling Ledger Group", trigger: "Incorporating new consultancy subsidiary", location: "Glasgow" },
      { name: "Sophia Chen", role: "Founder", company: "Chen and Associates", trigger: "Filing corporate expansion reports", location: "London" }
    ],
    law: [
      { name: "Harvey Vance", role: "Senior Partner", company: "Vance Legal", trigger: "Merging two local offices and hiring conveyancers", location: "Leeds" },
      { name: "Elaine Brooks", role: "Practice Director", company: "Brooks and Co Solicitors", trigger: "Expanding family law practice team", location: "Birmingham" },
      { name: "Robert Croft", role: "Managing Partner", company: "Croft Legal Group", trigger: "Opening new commercial litigation branch", location: "Manchester" }
    ],
    agencies: [
      { name: "Alex Mercer", role: "Founder", company: "Mercer Digital", trigger: "Announced seed funding round and office expansion", location: "London" },
      { name: "Jane Foster", role: "Creative Director", company: "Foster and Co Creative", trigger: "Signing new office lease for design studio", location: "Manchester" },
      { name: "Daniel Craig", role: "MD", company: "Craig Web Developers", trigger: "Expanding engineering team by five heads", location: "Glasgow" }
    ],
    consultants: [
      { name: "Richard Hall", role: "CEO", company: "Hall Growth Advisors", trigger: "Filing new consulting trademark and hiring", location: "Leeds" },
      { name: "Emma Watson", role: "Founder", company: "Watson Management", trigger: "Opening second consulting office branch", location: "London" },
      { name: "James Bond", role: "MD", company: "Bond Advisory Services", trigger: "Registered new B2B advisory entity", location: "Birmingham" }
    ]
  };

  const statuses = [
    "Querying Company House registers...",
    "Filtering active hiring alerts...",
    "Scanning land registry lease filings...",
    "Matching local trigger signals...",
    "Verifying contact deliverability status..."
  ];

  const handleScan = () => {
    setState("scanning");
    setProgress(0);
    setStatusText(statuses[0]);
  };

  useEffect(() => {
    if (state !== "scanning") return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);
          setState("done");
          return 100;
        }
        const index = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[index]);
        return next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [state]);

  const currentLeads = sampleLeads[industry] || [];

  return (
    <section style={{ padding: "96px 0", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="wrap" style={{ maxWidth: 860, textAlign: "center" }}>
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center" }}>Live Lead Scanner</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 16 }}>
            Scan live buying triggers in your sector
          </h2>
          <p style={{ color: "var(--color-body)", fontSize: 16, maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.6 }}>
            Select your industry below. Our scanner will query active incorporations, LinkedIn vacancy alerts, and land filings to find companies in need of your services this week.
          </p>

          <div style={{
            background: "var(--color-background)",
            padding: 32,
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            textAlign: "left",
            boxShadow: "0 4px 20px oklch(17% 0.024 58 / 0.03)"
          }}>
            {state === "idle" && (
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 240 }}>
                  <label htmlFor="industry-select" style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)" }}>YOUR INDUSTRY</label>
                  <select
                    id="industry-select"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="form-input"
                    style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                  >
                    <option value="recruitment">Recruitment Agencies</option>
                    <option value="accountancy">Accountancy Firms</option>
                    <option value="law">Law Firms and Solicitors</option>
                    <option value="agencies">Marketing and Web Agencies</option>
                    <option value="consultants">Management Consultants</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleScan}
                  className="btn btn-warm btn-lg"
                  style={{ marginTop: 20 }}
                >
                  Scan live triggers
                </button>
              </div>
            )}

            {state === "scanning" && (
              <div style={{ padding: "16px 0", textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-accent)", marginBottom: 12 }}>
                  {statusText}
                </div>
                <div style={{ width: "100%", background: "var(--color-border)", height: 6, borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
                  <div style={{ width: `${progress}%`, background: "var(--color-accent)", height: "100%", transition: "width 0.1s ease" }} />
                </div>
                <div style={{ fontSize: 12, color: "var(--color-muted)" }}>{progress} percent compiled</div>
              </div>
            )}

            {state === "done" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>
                    Sourced this week in your territory:
                  </div>
                  <button
                    type="button"
                    onClick={() => setState("idle")}
                    className="btn btn-outline"
                    style={{ padding: "6px 12px", fontSize: 12 }}
                  >
                    New scan
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {currentLeads.map((lead, index) => (
                    <div
                      key={index}
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        padding: 20,
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: 12 }}>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-foreground)" }}>{lead.company}</div>
                          <div style={{ fontSize: 13, color: "var(--color-muted)" }}>{lead.role} &bull; {lead.location}</div>
                        </div>
                        <span style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "var(--color-accent)",
                          background: "var(--color-accent-bg)",
                          padding: "4px 10px",
                          borderRadius: 4
                        }}>
                          {lead.trigger}
                        </span>
                      </div>
                      
                      <div style={{
                        borderTop: "1px solid var(--color-border)",
                        paddingTop: 12,
                        display: "flex",
                        gap: 24,
                        fontSize: 12,
                        alignItems: "center"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-muted)" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span style={{ filter: "blur(4.5px)" }}>{lead.name.toLowerCase().replace(" ", "")} at company dot com</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-muted)" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          <span style={{ filter: "blur(4.5px)" }}>plus forty four seven thousand twelve thirty four fifty six</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 24,
                  padding: 20,
                  background: "oklch(59% 0.130 34 / 0.05)",
                  border: "1.5px dashed var(--color-accent)",
                  borderRadius: 8,
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-accent)", marginBottom: 8 }}>
                    Territory Exclusivity Alert
                  </div>
                  <p style={{ fontSize: 13, color: "var(--color-body)", lineHeight: 1.6, margin: "0 auto 16px", maxWidth: 640 }}>
                    Our leads are one hundred percent exclusive. We only work with one client per industry per city. Secure your region before your competitors claim these buyers.
                  </p>
                  <Link href="/contact" className="btn btn-warm">
                    Claim your exclusive territory
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* ══ HERO SECTION ══ */}
      <section style={{ padding: "80px 0 96px", background: "var(--color-background)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Premium Outbound Pipeline</p>
          <h1 style={{
            fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
            fontSize: "clamp(44px, 5.5vw, 76px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "var(--color-foreground)",
            marginBottom: 24,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            You need customers, not contacts.
          </h1>
          <p style={{
            fontSize: 20,
            fontWeight: 600,
            color: "var(--color-body)",
            lineHeight: 1.6,
            maxWidth: 720,
            margin: "0 auto 20px"
          }}>
            Mailchimp sends emails. Hubspot tracks pipelines. Salesforce manages accounts. None of them find you a single customer. Leadhaus does.
          </p>
          <p style={{
            fontSize: 15,
            color: "var(--color-muted)",
            lineHeight: 1.7,
            maxWidth: 720,
            margin: "0 auto 40px"
          }}>
            We figure out exactly who your buyers are, where they spend their time, and what they need right now. Then we put your offer in front of them and bring the enquiries to your inbox. One fixed price every month. No software to learn. No list of your own required. Just customers landing in your inbox each week.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" className="btn btn-warm btn-lg">See pricing</Link>
            <Link href="/contact" className="btn btn-dark btn-lg">Book a call</Link>
          </div>

          {/* Product showcase dashboard */}
          <OutboundCockpitMockup />
        </div>
      </section>

      {/* ══ INTERACTIVE LIVE LEAD SCANNER ══ */}
      <LiveLeadScanner />

      {/* ══ SECTION 2: THE PROBLEM WITH OTHER TOOLS ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <Reveal>
            <div className="section-header" style={{ marginBottom: 32 }}>
              <p className="eyebrow">The Outbound Problem</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 700 }}>Everyone else is just a postman.</h2>
            </div>
            <div style={{ fontSize: 17, color: "var(--color-muted)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
              <p>
                Mailchimp, MailerLite, Brevo, EmailOctopus, SendX. All of them are sending tools. They wait for you to upload a list, then they deliver to it. If you do not have a list, they cannot help you. If your list is stale or has been hammered by every other marketer who bought the same data, they cannot help you either.
              </p>
              <p>
                The problem is that finding the right people to email is the hard part. Sending the email is trivial. Yet the entire industry has built itself around the trivial part and ignored the hard part.
              </p>
              <p style={{ fontWeight: 700, color: "var(--color-foreground)", fontSize: 20, fontFamily: "var(--font-serif), Georgia, serif" }}>
                Leadhaus does the hard part.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SECTION 3: HOW WE ARE DIFFERENT ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-background)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">How We Operate</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }}>We find them. We send to them. You get the enquiries.</h2>
            </div>
          </Reveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginTop: 48
          }} className="steps-grid">
            {[
              {
                title: "Fresh leads, built for you",
                body: "Every lead in your database is found live, this week, specifically for your business. No recycled lists. No data that ten other companies have already burned through. Yours and yours alone."
              },
              {
                title: "Sent for you, not by you",
                body: "We run the outreach from our infrastructure on your behalf. Throttled at safe volumes to protect deliverability. Sequenced based on how recipients behave. You never touch a sending tool."
              },
              {
                title: "Reported in plain English",
                body: "Every Monday morning you get a one page summary showing how many leads were contacted, how many opened, how many replied, how many booked a call. No jargon. No graphs you need a degree to read."
              }
            ].map((col, i) => (
              <Reveal key={col.title} delay={i * 0.08}>
                <div style={{ background: "var(--color-surface)", padding: "40px 36px", border: "1px solid var(--color-border)", borderRadius: 12 }}>
                  <div style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-foreground)",
                    marginBottom: 16,
                  }}>
                    {col.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>{col.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: THE COMPARISON ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Comparing options</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }}>What you actually get for your money.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, textAlign: "left" }}>
                <thead>
                  <tr>
                    <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "16px 24px", fontWeight: 600, fontSize: 13 }}>Feature</th>
                    {["Leadhaus", "Smartlead", "Lemlist", "Mailchimp"].map((h, i) => (
                      <th key={h} style={{
                        background: "var(--color-foreground)",
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
                    <tr key={i} className="compare-row" style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
                      <td style={{ padding: "14px 24px", fontWeight: 500, color: "var(--color-foreground)" }}>{row.feature}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center", background: "oklch(59% 0.130 34 / 0.03)", fontWeight: 700 }}>{checkCell(row.lh, true,  row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.sl, false, row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.ll, false, row.negative)}</td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>{checkCell(row.mc, false, row.negative)}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "var(--color-background)", fontWeight: 600 }}>
                    <td style={{ padding: "14px 24px", color: "var(--color-foreground)" }}>Starting monthly price</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-accent)", background: "oklch(59% 0.130 34 / 0.03)" }}>£497</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>From $39</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>From $59</td>
                    <td style={{ padding: "14px 24px", textAlign: "center", color: "var(--color-muted)" }}>From $350</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 16, fontSize: 12, color: "var(--color-muted)", lineHeight: 1.65, maxWidth: 720 }}>
              Prices for competitors verified April 2026. While software tools like Smartlead and Lemlist appear cheaper, they are self service engines. You must purchase separate sending domains, configure email servers, pay list providers, and run the system yourself. Leadhaus includes the lead sourcing, infrastructure setup, copywriting, and daily management in one fixed monthly price.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ SECTION 5: WHO LEADHAUS IS FOR ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-background)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <p className="eyebrow">Audience Focus</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }}>If you sell to businesses or to consumers, we work for you.</h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 48 }} className="page-hero-grid">
            <Reveal>
              <div style={{ background: "var(--color-surface)", padding: "44px 40px", border: "1px solid var(--color-border)", borderRadius: 12, height: "100%" }}>
                <p className="eyebrow">B2B Markets</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginBottom: 16 }}>Selling to businesses</h3>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                  Solicitors, accountants, recruiters, agencies, consultants, B2B services. We find decision makers by job title, industry, company size, and geography. Verified contact data delivered into your sending sequence every week.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div style={{ background: "var(--color-surface)", padding: "44px 40px", border: "1px solid var(--color-border)", borderRadius: 12, height: "100%" }}>
                <p className="eyebrow">B2C Markets</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginBottom: 16 }}>Selling to consumers</h3>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                  Tradespeople, gyms, coaches, local services. We monitor public intent signals such as new home purchases, new business incorporations, planning permission filings, and active social conversations in your area. Warm prospects who have just become buyers for what you sell.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: PROOF ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }} className="page-hero-grid">
            <div>
              <Reveal>
                <p className="eyebrow">Proven Pipeline</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, marginBottom: 20 }}>Built and tested on our own business.</h2>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75 }}>
                  Leadhaus is the engine behind BlockHaus, our crypto real estate platform. In ten weeks of live operation we have built a database of 237,000 verified contacts, growing by approximately 30,000 every day. Open rates average 42 percent. Deliverability sits at 77 percent. Bounce rates stay below 23 percent because the database cleans itself in real time.
                </p>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.75, marginTop: 16 }}>
                  These are not numbers we read in a case study. They are the numbers our own infrastructure produces every day. We use Leadhaus on Leadhaus.
                </p>
              </Reveal>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="stats-grid">
              {[
                { n: "237,000", l: "verified contacts and growing" },
                { n: "30,000",  l: "new contacts added daily" },
                { n: "42%",     l: "average open rate" },
                { n: "77%",     l: "deliverability across all sends" },
              ].map((stat, i) => (
                <Reveal key={stat.l} delay={i * 0.05}>
                  <div style={{ background: "var(--color-background)", padding: "32px 24px", textAlign: "center", border: "1px solid var(--color-border)", borderRadius: 12 }}>
                    <div style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "clamp(28px, 3.5vw, 42px)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "var(--color-foreground)",
                      marginBottom: 8,
                    }}>
                      {stat.n}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500, lineHeight: 1.4 }}>{stat.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 7: FINAL CTA ══ */}
      <section style={{ padding: "96px 0", background: "var(--color-foreground)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }} className="page-hero-grid">
            <div>
              <h2 style={{
                fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                fontSize: "clamp(30px, 3.5vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--color-background)",
              }}>
                Stop renting lists. Start receiving customers.
              </h2>
              <p style={{ marginTop: 12, fontSize: 16, color: "oklch(75% 0.015 76)", maxWidth: 520 }}>
                Pick a plan that matches your business. Tell us who you sell to. Within two weeks you will have a working pipeline delivering enquiries to your inbox.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", minWidth: 270 }}>
              <Link href="/pricing" className="btn btn-warm btn-lg">See pricing</Link>
              <Link href="/contact" className="btn btn-ghost-light btn-lg">Book a twenty minute call</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
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
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr !important; gap: 40px; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 24px; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
