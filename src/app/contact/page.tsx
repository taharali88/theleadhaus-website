import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Leadhaus. We respond to every message within one working day. The founder takes initial calls personally.",
  alternates: {
    canonical: "https://theleadhaus.io/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
