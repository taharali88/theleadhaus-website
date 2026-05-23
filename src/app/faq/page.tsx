import type { Metadata } from "next";
import FAQContent from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Leadhaus. Learn about our services, pricing, lead generation, GDPR compliance, and how we work.",
  alternates: {
    canonical: "https://theleadhaus.io/faq",
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
