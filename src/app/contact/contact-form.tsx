"use client";

import React, { useState } from "react";

const expectSteps = [
  {
    n: "01",
    title: "We prep before you arrive",
    body: "We review your company, product, and competitive landscape before the call. You won't spend 10 minutes explaining what you do.",
  },
  {
    n: "02",
    title: "An honest conversation about pipeline",
    body: "We'll map your current funnel, identify the gaps, and give you a frank view of what outbound can realistically deliver for your stage and market.",
  },
  {
    n: "03",
    title: "A proposal within 24 hours",
    body: "If we're a fit, you'll receive a scoped proposal the following business day — with a recommended tier, projected meeting volume, and cost per meeting.",
  },
  {
    n: "04",
    title: "No hard sell, ever",
    body: "We won't chase you after the call. If it's not right for you right now, we'll say so and tell you when to come back.",
  },
];

const trustItems = [
  "30 minute call — no obligation",
  "Proposal delivered in under 24 hours",
  "GDPR compliant campaigns, always",
  "You own every asset we produce",
];

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SuccessTickIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "",
    budget: "",
    challenge: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          businessName: formData.company,
          email: formData.email,
          phone: "",
          helpType: formData.budget,
          message: formData.challenge,
        }),
      });
      if (!response.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    background: "var(--color-background)",
    color: "var(--color-foreground)",
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    fontSize: 14,
    lineHeight: 1.4,
    outline: "none",
    transition: "border-color 0.18s, box-shadow 0.18s",
    WebkitAppearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--color-foreground)",
    marginBottom: 7,
    letterSpacing: "0.01em",
  };

  return (
    <>
      {/* ══ CONTACT PAGE ══ */}
      <section style={{ padding: "80px 0 96px" }}>
        <div className="wrap">
          <div className="contact-grid">

            {/* LEFT: copy + trust */}
            <div>
              <p className="eyebrow">Discovery Call</p>
              <h1 style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: 20 }}>
                Let&rsquo;s talk about your pipeline.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-muted)", maxWidth: 400, marginBottom: 48 }}>
                Book a 30-minute call. We&rsquo;ll come prepared with a view of your market, benchmark data for your industry, and a clear opinion on what&rsquo;s possible — no generic slides.
              </p>

              {/* What to expect */}
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 20 }}>
                What to expect
              </div>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {expectSteps.map((step) => (
                  <div key={step.n} style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 16,
                    padding: "20px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "start",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      paddingTop: 3,
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 4, fontFamily: "var(--font-sans), system-ui" }}>{step.title}</h4>
                      <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
                {trustItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--color-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div style={{ marginTop: 48, paddingTop: 48, borderTop: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: <MailIcon />, label: "hello@leadhaus.com", href: "mailto:hello@leadhaus.com" },
                  { icon: <MapPinIcon />, label: "London, United Kingdom", href: null },
                ].map((detail, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--color-muted)" }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {detail.icon}
                    </div>
                    {detail.href
                      ? <a href={detail.href} style={{ color: "var(--color-muted)", textDecoration: "none" }}>{detail.label}</a>
                      : <span>{detail.label}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form card */}
            <div>
              <div style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: "48px 44px",
              }}
              className="form-card-inner"
              >
                {formState === "success" ? (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "var(--color-accent-bg)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: "var(--color-accent)",
                    }}>
                      <SuccessTickIcon />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
                      We&rsquo;ll be in touch shortly.
                    </h3>
                    <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.65 }}>
                      Thanks for reaching out. One of our team will confirm your call within one business day — usually sooner.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{
                      fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                      fontSize: 26,
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                      marginBottom: 6,
                    }}>
                      Book a discovery call
                    </h2>
                    <p style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 32, lineHeight: 1.6 }}>
                      Fill in the details below and we&rsquo;ll confirm a time that works for you within one business day.
                    </p>

                    <form onSubmit={handleSubmit}>
                      {/* Name row */}
                      <div className="form-row" style={{ marginBottom: 20 }}>
                        <div>
                          <label htmlFor="first-name" style={labelStyle}>First name</label>
                          <input
                            type="text" id="first-name" required placeholder="James"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                        <div>
                          <label htmlFor="last-name" style={labelStyle}>Last name</label>
                          <input
                            type="text" id="last-name" required placeholder="Morrison"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div style={{ marginBottom: 20 }}>
                        <label htmlFor="contact-email" style={labelStyle}>Work email</label>
                        <input
                          type="email" id="contact-email" required placeholder="james@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>

                      {/* Company */}
                      <div style={{ marginBottom: 20 }}>
                        <label htmlFor="contact-company" style={labelStyle}>Company</label>
                        <input
                          type="text" id="contact-company" required placeholder="Acme Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>

                      {/* Team size + Budget */}
                      <div className="form-row" style={{ marginBottom: 20 }}>
                        <div>
                          <label htmlFor="team-size" style={labelStyle}>Team size</label>
                          <select
                            id="team-size"
                            value={formData.teamSize}
                            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          >
                            <option value="">Select…</option>
                            <option>1–10</option>
                            <option>11–50</option>
                            <option>51–200</option>
                            <option>201–500</option>
                            <option>500+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" style={labelStyle}>Monthly budget</label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          >
                            <option value="">Select…</option>
                            <option>Under £2,000</option>
                            <option>£2,000–£5,000</option>
                            <option>£5,000–£10,000</option>
                            <option>£10,000+</option>
                            <option>Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div style={{ marginBottom: 24 }}>
                        <label htmlFor="challenge" style={labelStyle}>What&rsquo;s your biggest pipeline challenge right now?</label>
                        <textarea
                          id="challenge"
                          rows={4}
                          placeholder="e.g. We're generating leads but they're not converting, or we have no outbound process at all..."
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          style={{ ...inputStyle, resize: "vertical", minHeight: 100, lineHeight: 1.6 }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>

                      {formState === "error" && (
                        <div style={{ marginBottom: 16, padding: "12px 16px", border: "1px solid oklch(65% 0.15 20)", background: "oklch(96% 0.03 20)", borderRadius: 8 }}>
                          <p style={{ fontSize: 13, color: "oklch(40% 0.12 20)" }}>
                            Something went wrong. Please try again or email us directly at hello@leadhaus.com
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn btn-warm btn-lg btn-full"
                        style={{ opacity: formState === "submitting" ? 0.6 : 1 }}
                      >
                        {formState === "submitting" ? "Sending…" : "Request a discovery call →"}
                      </button>

                      <p style={{ fontSize: 12, color: "var(--color-muted)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                        We&rsquo;ll confirm within one business day. By submitting you agree to our{" "}
                        <a href="/privacy" style={{ color: "var(--color-muted)", textDecoration: "underline" }}>Privacy Policy</a>.
                      </p>
                    </form>

                    {/* Calendly embed */}
                    <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid var(--color-border)" }}>
                      <h3 style={{ fontSize: 18, marginBottom: 16, fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif" }}>
                        Or book a time directly.
                      </h3>
                      <div style={{ border: "1px solid var(--color-border)", borderRadius: 8, overflow: "hidden" }}>
                        <iframe
                          src="https://calendly.com/taharali/lets-talk?hide_gdpr_banner=1"
                          title="Book a call with LeadHaus"
                          width="100%"
                          height="600"
                          style={{ border: 0, display: "block" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROOF BAR ══ */}
      <section style={{ background: "var(--color-foreground)", padding: "40px 0" }}>
        <div className="wrap">
          <div className="proof-inner">
            {[
              { n: "250+", l: "B2B clients" },
              { n: "2M+",  l: "Qualified leads delivered" },
              { n: "35%",  l: "Avg. pipeline lift in 90 days" },
              { n: "24h",  l: "Proposal turnaround" },
            ].map((stat, i) => (
              <React.Fragment key={stat.n}>
                {i > 0 && (
                  <div style={{ width: 1, height: 40, background: "oklch(30% 0.024 58)" }} className="proof-divider" />
                )}
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "var(--color-background)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}>
                    {stat.n}
                  </div>
                  <div style={{ fontSize: 12, color: "oklch(60% 0.018 75)", marginTop: 5 }}>{stat.l}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .proof-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 64px;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 56px; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
          .form-card-inner { padding: 32px 24px !important; }
          .proof-inner { gap: 32px; }
          .proof-divider { display: none; }
        }
      `}</style>
    </>
  );
}
