import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Leadhaus Privacy Policy. How we collect, use, and protect your personal data in compliance with UK GDPR.",
  alternates: {
    canonical: "https://theleadhaus.io/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: May 2026
          </p>

          <div className="mt-12 space-y-10 text-body leading-relaxed">
            {/* 1. Who we are */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                1. Who we are
              </h2>
              <p>
                Leadhaus is operated by Tahar Ali, sole trader registered in
                England. We provide lead generation, outreach, and reporting
                services through theleadhaus.io. For the purposes of UK GDPR, we
                are the data controller for the personal data we collect through
                this website and in the course of providing our services.
              </p>
            </div>

            {/* 2. What data we collect */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                2. What data we collect
              </h2>
              <p>When you use our website or services, we may collect:</p>
              <p className="mt-3">
                <strong className="text-foreground">Account data:</strong> your
                name, email address, business name, phone number, and payment
                information provided during sign up and onboarding.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  Contact form submissions:
                </strong>{" "}
                your name, email address, business name, phone number (if
                provided), and the content of your message.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Usage data:</strong>{" "}
                anonymised analytics data about how you interact with our
                website, collected via Vercel Analytics. This does not include
                personally identifiable information.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Lead data:</strong> contact
                information of individuals sourced from public registries and
                directories for the purpose of outreach campaigns on behalf of
                our customers. This data is processed under the legitimate
                interest basis.
              </p>
            </div>

            {/* 3. How we use your data */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                3. How we use your data
              </h2>
              <p>We use personal data for the following purposes:</p>
              <p className="mt-3">
                To provide and manage our services, including account creation,
                billing, lead generation, outreach campaigns, and reporting.
              </p>
              <p className="mt-3">
                To respond to enquiries submitted through our contact form.
              </p>
              <p className="mt-3">
                To send transactional emails including welcome messages, weekly
                reports, and billing notifications.
              </p>
              <p className="mt-3">
                To improve our website and services based on anonymised usage
                patterns.
              </p>
            </div>

            {/* 4. Legal basis for processing */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                4. Legal basis for processing
              </h2>
              <p>
                <strong className="text-foreground">Contract:</strong> we
                process your account and payment data as necessary to fulfil the
                contract between you and Leadhaus.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  Legitimate interest:
                </strong>{" "}
                we process lead data under the legitimate interest basis
                permitted by UK GDPR for B2B outreach, and under the soft opt in
                rules permitted by PECR for consumer contact in specific
                situations. We have conducted a legitimate interest assessment
                and maintain records of this.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Consent:</strong> where
                required, we obtain explicit consent before processing data,
                including for cookies that are not strictly necessary.
              </p>
            </div>

            {/* 5. Data sharing */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                5. Data sharing
              </h2>
              <p>
                We do not sell personal data. We share data only with the
                following categories of processor, each of which is subject to
                appropriate data processing agreements:
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Payment processing:</strong>{" "}
                Stripe, for handling subscription payments and billing.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  Authentication:
                </strong>{" "}
                Clerk, for managing user accounts and login.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  Email delivery:
                </strong>{" "}
                Resend, for sending transactional emails on our behalf.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Hosting:</strong> Vercel,
                for hosting our website and application.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Database:</strong> Neon, for
                storing application data securely.
              </p>
            </div>

            {/* 6. Data retention */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                6. Data retention
              </h2>
              <p>
                Account data is retained for the duration of the service
                agreement and for six years thereafter for financial and legal
                compliance. Lead data generated for customers becomes their
                property and is exported on cancellation. We retain audit logs of
                all emails sent for two years in compliance with UK regulations.
              </p>
            </div>

            {/* 7. Your rights */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                7. Your rights
              </h2>
              <p>Under UK GDPR, you have the right to:</p>
              <p className="mt-3">
                Access the personal data we hold about you. Request correction
                of inaccurate data. Request deletion of your data (right to
                erasure). Object to processing based on legitimate interest.
                Request restriction of processing. Data portability.
              </p>
              <p className="mt-3">
                To exercise any of these rights, contact us using the form on
                our contact page or write to us at our registered address. We
                will respond within thirty days.
              </p>
            </div>

            {/* 8. International transfers */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                8. International transfers
              </h2>
              <p>
                Some of our service providers operate outside the UK. Where data
                is transferred internationally, we ensure appropriate safeguards
                are in place including Standard Contractual Clauses or adequacy
                decisions recognised by the UK government.
              </p>
            </div>

            {/* 9. Cookies */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                9. Cookies
              </h2>
              <p>
                Our cookie practices are described in our separate Cookie
                Policy. We use only essential cookies and privacy compliant
                analytics. We do not use advertising cookies or tracking pixels.
              </p>
            </div>

            {/* 10. Changes to this policy */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                10. Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. Material changes
                will be communicated via email to registered users. The date at
                the top of this page shows when it was last updated.
              </p>
            </div>

            {/* 11. Contact */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                11. Contact
              </h2>
              <p>
                If you have questions about this privacy policy or how we handle
                your data, please contact us through the form on our contact
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
