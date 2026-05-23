"use client";

import React, { useState } from "react";

const SuccessTickIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    helpType: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          helpType: formData.helpType,
          message: formData.message,
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
      <section style={{ padding: "80px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: 640, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow" style={{ textAlign: "center" }}>Contact</p>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", marginBottom: 16 }}>
              Get in touch
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-muted)" }}>
              We respond to every message within one working day. The founder takes initial calls personally.
            </p>
          </div>

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
                  We will be in touch shortly
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.65 }}>
                  Thanks for reaching out. One of our team will confirm your call within one business day, usually sooner.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* Name */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="contact-name" style={labelStyle}>Name</label>
                  <input
                    type="text" id="contact-name" required placeholder="James Morrison"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Business Name */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="business-name" style={labelStyle}>Business name</label>
                  <input
                    type="text" id="business-name" required placeholder="Acme Ltd"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Business Email */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="contact-email" style={labelStyle}>Business email</label>
                  <input
                    type="email" id="contact-email" required placeholder="james@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* Phone (optional) */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="contact-phone" style={labelStyle}>Phone (optional)</label>
                  <input
                    type="tel" id="contact-phone" placeholder="07700 900077"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {/* How can we help dropdown */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="help-type" style={labelStyle}>How can we help</label>
                  <select
                    id="help-type" required
                    value={formData.helpType}
                    onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option value="">Select an option…</option>
                    <option value="I want to sign up">I want to sign up</option>
                    <option value="I have a question about pricing">I have a question about pricing</option>
                    <option value="I want to book a call">I want to book a call</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Provide any details about what you need help with…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 100, lineHeight: 1.6 }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-bg)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                {formState === "error" && (
                  <div style={{ marginBottom: 16, padding: "12px 16px", border: "1px solid oklch(65% 0.15 20)", background: "oklch(96% 0.03 20)", borderRadius: 8 }}>
                    <p style={{ fontSize: 13, color: "oklch(40% 0.12 20)" }}>
                      Something went wrong. Please try again or submit your booking directly below.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn btn-warm btn-lg btn-full"
                  style={{ opacity: formState === "submitting" ? 0.6 : 1 }}
                >
                  {formState === "submitting" ? "Sending…" : "Send message"}
                </button>

                <p style={{ fontSize: 12, color: "var(--color-muted)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                  We will confirm within one business day. By submitting you agree to our{" "}
                  <a href="/privacy" style={{ color: "var(--color-muted)", textDecoration: "underline" }}>Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Calendly embed */}
          <div style={{ marginTop: 56, paddingTop: 48, borderTop: "1px solid var(--color-border)" }}>
            <h3 style={{ fontSize: 20, marginBottom: 20, textAlign: "center", fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif" }}>
              Or book a twenty minute call directly
            </h3>
            <div style={{ border: "1px solid var(--color-border)", borderRadius: 8, overflow: "hidden" }}>
              <iframe
                src="https://calendly.com/taharali/lets-talk?hide_gdpr_banner=1"
                title="Book a call with Leadhaus"
                width="100%"
                height="600"
                style={{ border: 0, display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-card-inner { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
