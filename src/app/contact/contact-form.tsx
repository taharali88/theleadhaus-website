"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";

const helpOptions = [
  "I want to sign up",
  "I have a question about pricing",
  "I want to book a call",
  "Something else",
];

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
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
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");
      setFormState("success");
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        helpType: "",
        message: "",
      });
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-foreground">Get in <span className="italic text-gold">touch</span></h1>
            <p className="mt-6 text-lg text-body leading-relaxed">
              We respond to every message within one working day. The founder
              takes initial calls personally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <FadeInSection>
              {formState === "success" ? (
                <div className="border border-border bg-surface p-8 rounded-none">
                  <h2 className="text-xl font-semibold text-foreground">
                    Message sent.
                  </h2>
                  <p className="mt-3 text-body">
                    Thank you for getting in touch. We will respond within one
                    working day. If your enquiry is urgent, book a call using the
                    link below.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm placeholder:text-muted"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Business name */}
                  <div>
                    <label
                      htmlFor="contact-business"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Business name
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      required
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm placeholder:text-muted"
                      placeholder="Your company or trading name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Business email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm placeholder:text-muted"
                      placeholder="you@company.co.uk"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone{" "}
                      <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm placeholder:text-muted"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>

                  {/* How can we help */}
                  <div>
                    <label
                      htmlFor="contact-help-type"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      How can we help?
                    </label>
                    <select
                      id="contact-help-type"
                      required
                      value={formData.helpType}
                      onChange={(e) =>
                        setFormData({ ...formData, helpType: e.target.value })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {helpOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-input rounded-none px-4 py-3 text-sm placeholder:text-muted resize-y"
                      placeholder="Tell us a bit about what you need"
                    />
                  </div>

                  {/* Error state */}
                  {formState === "error" && (
                    <div className="border border-red-200 bg-red-50 p-4 rounded-none">
                      <p className="text-sm text-red-800">
                        Something went wrong sending your message. Please try
                        again or book a call directly using the link below.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-premium rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting"
                      ? "Sending..."
                      : "Send message"}
                  </button>
                </form>
              )}
            </FadeInSection>

            {/* Calendly embed */}
            <FadeInSection delay={100}>
              <div className="mt-16 pt-12 border-t border-border">
                <h2 className="text-xl font-semibold text-foreground">
                  Or book a twenty minute <span className="italic text-gold">call</span> directly.
                </h2>
                <div className="mt-6 border border-border overflow-hidden rounded-none">
                  <iframe
                    src="https://calendly.com/taharali/lets-talk?hide_gdpr_banner=1"
                    title="Book a call with Leadhaus"
                    width="100%"
                    height="700"
                    className="border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
