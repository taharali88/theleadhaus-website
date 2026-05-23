import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    const body = await request.json();
    const { data, step, isDraft } = body;

    // TODO: When Neon is provisioned, save to onboarding_responses table
    // import { db } from "@/db";
    // import { onboardingResponses } from "@/db/schema";
    // import { eq } from "drizzle-orm";
    //
    // await db.insert(onboardingResponses).values({
    //   userId: internalUserId,
    //   responses: data,
    //   currentStep: step,
    //   isDraft,
    //   completedAt: isDraft ? null : new Date(),
    // }).onConflictDoUpdate({
    //   target: onboardingResponses.userId,
    //   set: { responses: data, currentStep: step, isDraft, updatedAt: new Date() },
    // });

    console.log("Onboarding submission:", {
      clerkUserId: userId,
      step,
      isDraft,
      dataKeys: Object.keys(data),
    });

    // If final submission, send alert to Tahar and welcome email to customer
    if (!isDraft) {
      // TODO: Send internal alert via Resend
      // TODO: Send welcome email to customer with timeline
      console.log("Onboarding complete — trigger welcome flow");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Failed to save onboarding data." },
      { status: 500 }
    );
  }
}
