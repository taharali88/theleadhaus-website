import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
    }
    stripeClient = new Stripe(key, {
      apiVersion: "2026-04-22.dahlia",
      typescript: true,
    });
  }
  return stripeClient;
}

/** @deprecated Use getStripe() instead — kept for backward compat */
export const stripe = {
  get checkout() { return getStripe().checkout; },
  get webhooks() { return getStripe().webhooks; },
  get customers() { return getStripe().customers; },
  get subscriptions() { return getStripe().subscriptions; },
} as unknown as Stripe;

/* ────────────────────────────────────────────
   Stripe Product / Price configuration
   
   These price IDs should be created in Stripe Dashboard
   (test mode first, then live) and stored as env vars.
   
   Products to create:
   - Starter monthly: £497/month recurring
   - Starter 6 month: £2,386 one time
   - Growth monthly: £997/month recurring
   - Growth 6 month: £4,786 one time
   - Scale monthly: £1,997/month recurring
   - Scale 6 month: £9,586 one time
   ──────────────────────────────────────────── */

export const PRICE_IDS = {
  starter: {
    monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY || "",
    sixMonth: process.env.STRIPE_PRICE_STARTER_SIX_MONTH || "",
  },
  growth: {
    monthly: process.env.STRIPE_PRICE_GROWTH_MONTHLY || "",
    sixMonth: process.env.STRIPE_PRICE_GROWTH_SIX_MONTH || "",
  },
  scale: {
    monthly: process.env.STRIPE_PRICE_SCALE_MONTHLY || "",
    sixMonth: process.env.STRIPE_PRICE_SCALE_SIX_MONTH || "",
  },
} as const;

export type PlanTier = keyof typeof PRICE_IDS;
export type BillingPeriod = "monthly" | "sixMonth";

export function getPriceId(tier: PlanTier, period: BillingPeriod): string {
  const priceId = PRICE_IDS[tier][period];
  if (!priceId) {
    throw new Error(
      `Stripe price ID not configured for ${tier} ${period}. Set STRIPE_PRICE_${tier.toUpperCase()}_${period === "monthly" ? "MONTHLY" : "SIX_MONTH"} in env.`
    );
  }
  return priceId;
}
