"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";

type PlanTier = "starter" | "growth" | "scale";
type BillingPeriod = "monthly" | "sixMonth";

const plans: Record<
  PlanTier,
  {
    name: string;
    monthlyPrice: string;
    sixMonthPrice: string;
    sixMonthSaving: string;
    audience: string;
  }
> = {
  starter: {
    name: "Starter",
    monthlyPrice: "£497",
    sixMonthPrice: "£2,386",
    sixMonthSaving: "saves £596",
    audience: "Local service businesses, solo operators, single service offerings.",
  },
  growth: {
    name: "Growth",
    monthlyPrice: "£997",
    sixMonthPrice: "£4,786",
    sixMonthSaving: "saves £1,196",
    audience: "Established small businesses, multi service operations, scaling consultancies.",
  },
  scale: {
    name: "Scale",
    monthlyPrice: "£1,997",
    sixMonthPrice: "£9,586",
    sixMonthSaving: "saves £2,396",
    audience: "Agencies serving their own clients, businesses with multiple service lines.",
  },
};

export function SignUpContent() {
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>("growth");
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: selectedPlan, period: billingPeriod }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  }

  const currentPlan = plans[selectedPlan];
  const displayPrice =
    billingPeriod === "monthly"
      ? `${currentPlan.monthlyPrice} per month`
      : `${currentPlan.sixMonthPrice} upfront (${currentPlan.sixMonthSaving})`;

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <FadeInSection>
              <h1 className="text-foreground text-center">Choose your <span className="italic text-gold">plan</span></h1>
              <p className="mt-6 text-body text-center leading-relaxed">
                Every plan includes lead generation, full outreach delivery,
                weekly reporting, and the live dashboard.
              </p>
            </FadeInSection>

            {/* Billing toggle */}
            <FadeInSection delay={100}>
              <div className="mt-10 flex justify-center">
                <div className="inline-flex rounded-none border border-border p-1 bg-surface">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-none text-sm font-medium transition-colors ${
                      billingPeriod === "monthly"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-body hover:text-foreground"
                    }`}
                    onClick={() => setBillingPeriod("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-none text-sm font-medium transition-colors ${
                      billingPeriod === "sixMonth"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-body hover:text-foreground"
                    }`}
                    onClick={() => setBillingPeriod("sixMonth")}
                  >
                    Six months upfront
                    <span className="ml-1.5 text-accent text-xs font-semibold">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </FadeInSection>

            {/* Plan selector */}
            <FadeInSection delay={200}>
              <div className="mt-8 space-y-3">
                {(Object.entries(plans) as [PlanTier, typeof plans.starter][]).map(
                  ([key, plan]) => (
                    <button
                      key={key}
                      type="button"
                      className={`w-full text-left rounded-none p-6 border transition-all ${
                        selectedPlan === key
                          ? "border-accent bg-accent/5 ring-1 ring-accent"
                          : "border-border bg-background hover:border-border-dark"
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {plan.name}
                            </h3>
                            {key === "growth" && (
                              <span className="inline-flex items-center bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white rounded-none">
                                Most popular
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-body">
                            {plan.audience}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-xl font-bold text-foreground">
                            {billingPeriod === "monthly"
                              ? plan.monthlyPrice
                              : plan.sixMonthPrice}
                          </p>
                          <p className="text-xs text-muted">
                            {billingPeriod === "monthly"
                              ? "per month"
                              : plan.sixMonthSaving}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                )}
              </div>
            </FadeInSection>

            {/* Summary and checkout */}
            <FadeInSection delay={300}>
              <div className="mt-10 border border-border bg-surface p-6 rounded-none">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-foreground">
                    {currentPlan.name} plan
                  </p>
                  <p className="text-sm text-body">{displayPrice}</p>
                </div>
                <p className="text-xs text-muted mb-6">
                  Minimum commitment: six months. Fourteen day cooling off
                  period under UK consumer law. By proceeding you agree to our{" "}
                  <Link href="/terms" className="text-accent hover:underline">
                    Terms and Conditions
                  </Link>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="btn-premium w-full rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Redirecting to checkout..." : "Continue to payment"}
                </button>
                <p className="mt-3 text-xs text-muted text-center">
                  Secure payment powered by Stripe
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
