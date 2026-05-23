import type { Metadata } from "next";
import { SignUpContent } from "./signup-content";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your Leadhaus account and start receiving enquiries within two weeks.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return <SignUpContent />;
}
