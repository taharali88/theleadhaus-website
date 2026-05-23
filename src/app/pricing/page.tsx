import Link from "next/link";
import type { Metadata } from "next";
import { FadeInSection } from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Pricing | Leadhaus",
  description:
    "One fixed price every month. No surprises. Three plans that include lead generation, full outreach delivery, weekly reporting, and the live dashboard.",
  alternates: {
    canonical: "https://theleadhaus.io/pricing",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "£497",
    period: "per month",
    upfront: "£2,386 for six months upfront",
    upfrontSaving: "saves £596",
    audience:
      "Local service businesses, solo operators, and companies with a single service offering.",
    features: [
      "Up to two outreach channels (email plus one intent monitor)",
      "Onboarding questionnaire and database build",
      "Fresh leads generated weekly, exclusive to your business",
      "Full outreach sent from our managed warm domains",
      "Weekly Monday morning summary in plain English",
      "Live dashboard access",
      "Bounce binning and database cleaning",
      "Email support, response within two working days",
    ],
    badge: null,
    accent: false,
  },
  {
    name: "Growth",
    price: "£997",
    period: "per month",
    upfront: "£4,786 for six months upfront",
    upfrontSaving: "saves £1,196",
    audience:
      "Established small businesses, multi service operations, and scaling consultancies.",
    features: [
      "Everything in Starter, plus:",
      "Up to four outreach channels (business to business email, intent monitoring, social engagement, and Land Registry or Companies House triggers)",
      "Custom audience segmentation by job title, industry, geography, or life event",
      "Monthly thirty minute strategy call",
      "Priority support, response within one working day",
      "Behavioural sequence optimization",
    ],
    badge: "Most popular",
    accent: true,
  },
  {
    name: "Scale",
    price: "£1,997",
    period: "per month",
    upfront: "£9,586 for six months upfront",
    upfrontSaving: "saves £2,396",
    audience:
      "Agencies serving their own clients, businesses with multiple service lines, and operations requiring custom integrations.",
    features: [
      "Everything in Growth, plus:",
      "All outreach channels",
      "Dedicated onboarding call with the founder",
      "Weekly strategy call",
      "Custom API integration with your existing CRM or systems",
      "Same day support",
      "Bespoke campaign design",
    ],
    badge: null,
    accent: false,
  },
];

const alternativeCosts = [
  { item: "B2B Database access (Apollo or ZoomInfo)", cost: "£80/mo", note: "Seat license and export limits" },
  { item: "Secondary domains (5 accounts)", cost: "£20/mo", note: "Domain registration and inbox fees" },
  { item: "Email warming and validation tools", cost: "£50/mo", note: "Ensuring messages do not hit spam" },
  { item: "Professional copywriting and templates", cost: "£500", note: "One time setup fee" },
  { item: "Your personal administrative labor", cost: "15 hours/wk", note: "Time spent managing databases and settings" },
];

export default function PricingPage() {
  return (
    <div className="bg-background text-body min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center flex flex-col items-center space-y-6">
          <h1 className="text-foreground tracking-tight leading-[1.1] font-bold">
            One fixed price every month. <span className="italic text-accent">No surprises.</span>
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Select a plan based on the level of service you need, not on contact volume. Every plan includes targeted lead generation, full outreach delivery, weekly reporting, and live dashboard access.
          </p>
          <div className="inline-flex items-center border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
            Pay for six months upfront and save 20 percent
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, i) => (
              <FadeInSection key={tier.name} delay={i * 100} className="h-full">
                <div
                  className={`border p-8 h-full flex flex-col justify-between relative ${
                    tier.accent
                      ? "border-2 border-accent bg-background shadow-sm"
                      : "border-border bg-surface"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-6 bg-accent px-3 py-1 border border-accent">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      {tier.name}
                    </h2>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-foreground tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-semibold text-body uppercase tracking-wider">
                        / {tier.period}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-body font-medium">
                      Or {tier.upfront}{" "}
                      <span className="text-accent font-semibold">
                        ({tier.upfrontSaving})
                      </span>
                    </p>

                    <p className="mt-6 text-sm text-body leading-relaxed min-h-[60px]">
                      {tier.audience}
                    </p>

                    <div className="mt-8 pt-8 border-t border-border">
                      <ul className="space-y-4">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-xs text-body"
                          >
                            {feature.endsWith(":") ? (
                              <span className="font-semibold text-foreground uppercase tracking-wider block mt-1">
                                {feature}
                              </span>
                            ) : (
                              <>
                                <svg
                                  className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                                <span className="leading-relaxed">{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href="/contact"
                      className={`block w-full text-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all ${
                        tier.accent
                          ? "bg-accent text-white hover:bg-accent-hover"
                          : "bg-foreground text-white hover:bg-accent"
                      }`}
                    >
                      Choose {tier.name}
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Cost Comparison */}
      <section className="py-20 md:py-32 bg-surface border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeInSection>
                <div className="space-y-6">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                    Return on investment
                  </span>
                  <h2 className="text-foreground tracking-tight">
                    The true cost of <span className="italic text-accent">doing it yourself</span>.
                  </h2>
                  <p className="text-body text-base leading-relaxed">
                    Setting up and maintaining an outbound email pipeline requires multiple software subscriptions, technical expertise, and daily oversight.
                  </p>
                  <p className="text-body text-base leading-relaxed">
                    Leadhaus consolidates this entire stack into a single, managed service. You save on tool licensing, skip the learning curve, and protect your primary company domain from blacklists.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-7">
              <FadeInSection delay={100}>
                <div className="border border-border bg-background p-6 shadow-sm">
                  <div className="border-b border-border pb-4 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">Outbound Tool Licensing & Labor</p>
                    <p className="text-xs text-body">Estimated monthly costs to match Leadhaus</p>
                  </div>
                  <div className="divide-y divide-border">
                    {alternativeCosts.map((item, idx) => (
                      <div key={idx} className="py-3 flex justify-between items-baseline gap-4 text-xs">
                        <div>
                          <p className="font-semibold text-foreground">{item.item}</p>
                          <p className="text-xs text-body mt-0.5">{item.note}</p>
                        </div>
                        <p className="font-bold text-accent shrink-0">{item.cost}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-dashed border-border flex justify-between items-baseline">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider">Equivalent DIY Monthly Stack</p>
                    <p className="text-lg font-extrabold text-accent">£150+ /mo + labor</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* What is not in the price */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeInSection>
              <div className="space-y-6">
                <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                  Inclusions
                </span>
                <h2 className="text-foreground tracking-tight">
                  What is <span className="italic text-accent">not</span> in the price.
                </h2>
                <div className="space-y-4 text-body text-base leading-relaxed">
                  <p>
                    There are no add ons. There are no surcharges for unsubscribed contacts the way Mailchimp bills them. There are no overage fees if your campaigns perform well and generate more responses than expected. The price you see is the price you pay every month.
                  </p>
                  <p>
                    Your card is billed on the day you sign up and on the same date every month thereafter, or once for six months if you choose the upfront option. The minimum commitment is six months. After the minimum term, you may cancel at any time with thirty days notice.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="space-y-6">
                <span className="text-xs font-bold text-accent tracking-widest uppercase block">
                  Refund policy
                </span>
                <h2 className="text-foreground tracking-tight">
                  Fourteen day <span className="italic text-accent">cooling off</span> period.
                </h2>
                <p className="text-body text-base leading-relaxed">
                  Under UK consumer law, you have fourteen days from the date of sign up to cancel and receive a full refund. After fourteen days, the six month minimum commitment applies.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
