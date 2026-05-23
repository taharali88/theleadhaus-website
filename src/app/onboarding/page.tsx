import type { Metadata } from "next";
import { OnboardingContent } from "./onboarding-content";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Complete your Leadhaus onboarding questionnaire.",
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return <OnboardingContent />;
}
