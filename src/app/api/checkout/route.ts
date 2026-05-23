import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe, getPriceId, type PlanTier, type BillingPeriod } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "You must be signed in to checkout." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { tier, period } = body as { tier: PlanTier; period: BillingPeriod };

    if (!tier || !period) {
      return NextResponse.json(
        { error: "Plan tier and billing period are required." },
        { status: 400 }
      );
    }

    const validTiers: PlanTier[] = ["starter", "growth", "scale"];
    const validPeriods: BillingPeriod[] = ["monthly", "sixMonth"];

    if (!validTiers.includes(tier) || !validPeriods.includes(period)) {
      return NextResponse.json(
        { error: "Invalid plan tier or billing period." },
        { status: 400 }
      );
    }

    const priceId = getPriceId(tier, period);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theleadhaus.io";

    const isRecurring = period === "monthly";

    const sessionParams: Record<string, unknown> = {
      success_url: `${siteUrl}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/signup`,
      payment_method_types: ["card"],
      client_reference_id: userId,
      metadata: {
        clerkUserId: userId,
        planTier: tier,
        billingPeriod: period,
      },
    };

    if (isRecurring) {
      sessionParams.mode = "subscription";
      sessionParams.line_items = [{ price: priceId, quantity: 1 }];
    } else {
      sessionParams.mode = "payment";
      sessionParams.line_items = [{ price: priceId, quantity: 1 }];
    }

    const session = await stripe.checkout.sessions.create(
      sessionParams as Parameters<typeof stripe.checkout.sessions.create>[0]
    );

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong creating the checkout session." },
      { status: 500 }
    );
  }
}
