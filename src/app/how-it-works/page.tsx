import type { Metadata } from "next";
import { FadeInSection } from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "How It Works | Leadhaus",
  description:
    "From sign up to first enquiry in fourteen days. A straightforward five step process. Nothing for you to learn. Nothing for you to install.",
  alternates: {
    canonical: "https://theleadhaus.io/how-it-works",
  },
};

const steps = [
  {
    number: "01",
    label: "Select your tier",
    why: "Why this matters: Outbound campaigns require predictable budgeting, not seat license surprises.",
    description:
      "You choose a plan based on the level of service you need, not on contact volume. The monthly price is fixed and transparent. You will never receive an unexpected bill because your customer database grew.",
  },
  {
    number: "02",
    label: "Define your buyer profile",
    why: "Why this matters: The relevance of your outreach determines your response rate.",
    description:
      "Our onboarding questionnaire takes twenty minutes to complete. You tell us who your buyers are, what industries they operate in, their company sizes, and their locations. We clarify any details on a short call and begin building your database.",
  },
  {
    number: "03",
    label: "Audience database build",
    why: "Why this matters: High quality, exclusive data prevents bounce rates and spam flags.",
    description:
      "Within seven days of onboarding, your initial database is live. We search verified public registers like Companies House and Land Registry to compile targeted lead lists. We clean and validate every email address. Every contact is exclusive to you.",
  },
  {
    number: "04",
    label: "Campaign outreach launch",
    why: "Why this matters: Throttled sending protects your company reputation.",
    description:
      "We launch your campaigns from our own warm sending domains. Daily volume is throttled to ensure high deliverability, and sequences adapt based on recipient responses. You never have to touch a sending tool.",
  },
  {
    number: "05",
    label: "Enquiries land in your inbox",
    why: "Why this matters: Your time belongs in meetings, not managing software.",
    description:
      "The first replies arrive within seven to ten days of campaigns going live. You receive warm replies directly in your inbox to handle. Each Monday morning you receive a plain English report summarizing results.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-background text-body min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-foreground tracking-tight leading-[1.1] font-bold mb-6">
              From sign up to first enquiry in <span className="italic text-accent">fourteen days.</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl">
              A straightforward five step process. Nothing for you to learn. Nothing for you to install. We handle the systems, you talk to buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Timeline Layout */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-24 md:space-y-36">
            {steps.map((step, idx) => (
              <FadeInSection key={step.number} delay={idx * 50}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                  {/* Left Column: Big Sans Number */}
                  <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start justify-between border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-8">
                    <span className="text-5xl md:text-7xl font-extrabold text-accent leading-none">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted mt-2">
                      Phase {step.number}
                    </span>
                  </div>

                  {/* Right Column: Copy content */}
                  <div className="md:col-span-9 max-w-3xl space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {step.label}
                    </h2>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {step.why}
                    </p>
                    <p className="text-body text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive every week */}
      <section className="py-20 md:py-28 bg-surface border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                Weekly reporting
              </span>
              <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                What you receive <span className="italic text-accent">every week</span>
              </h2>
              <p className="text-body text-base md:text-lg leading-relaxed">
                A dashboard showing live counts of leads in your database, leads added this week, messages sent, opens, clicks, replies, unsubscribes, and bookings.
              </p>
              <p className="text-body text-base leading-relaxed">
                The same data is summarized in a Monday morning email so you do not have to log in to know what is happening. We write it in plain English with suggestions on how to optimize conversions.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What you own */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                Data ownership
              </span>
              <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                What you <span className="italic text-accent">own</span>
              </h2>
              <p className="text-body text-base md:text-lg leading-relaxed">
                Every lead generated for your business is yours. If you cancel after the minimum term, the database goes with you. We bin bounces continuously to keep your database clean, and we top up to maintain the volume your plan covers.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
