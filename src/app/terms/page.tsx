import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Leadhaus services. Read our service agreement covering commitment periods, payments, lead ownership, and data protection.",
  alternates: {
    canonical: "https://theleadhaus.io/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-foreground">Terms and Conditions</h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: May 2026
          </p>

          <div className="mt-12 space-y-10 text-body leading-relaxed">
            {/* 1. Parties */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                1. Parties
              </h2>
              <p>
                These terms are between Leadhaus, operated by Tahar Ali, sole
                trader registered in England, and the customer purchasing
                services through theleadhaus.io.
              </p>
            </div>

            {/* 2. Services */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                2. Services
              </h2>
              <p>
                Leadhaus provides lead generation, outreach, and reporting
                services as described in the plan selected by the customer at
                sign up. The specific services included depend on the plan tier
                and are listed on the pricing page at the time of purchase.
              </p>
            </div>

            {/* 3. Commitment period */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                3. Commitment period
              </h2>
              <p>
                All plans include a minimum commitment of six months from the
                date of first payment. After the minimum term the agreement
                continues on a rolling monthly basis and may be cancelled by
                either party with thirty days written notice.
              </p>
            </div>

            {/* 4. Cooling off */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                4. Cooling off
              </h2>
              <p>
                Under the Consumer Contracts Regulations 2013, customers based
                in the UK have the right to cancel within fourteen days of sign
                up and receive a full refund. The right to cancel does not apply
                to services that have been fully performed or where lead
                generation activity has been completed at the customer&rsquo;s request
                within the fourteen day window.
              </p>
            </div>

            {/* 5. Payment */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                5. Payment
              </h2>
              <p>
                Monthly payments are taken by Stripe on the same date each
                month. Six month upfront payments are taken as a single
                transaction on sign up. Failed payments result in suspension of
                service after seven days. Persistent payment failure for thirty
                days results in account termination.
              </p>
            </div>

            {/* 6. Lead ownership */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                6. Lead ownership
              </h2>
              <p>
                All contact data generated for the customer&rsquo;s account becomes
                the property of the customer. On cancellation, the customer
                receives a full export of their database in CSV format within
                seven working days of cancellation taking effect.
              </p>
            </div>

            {/* 7. Customer responsibilities */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                7. Customer responsibilities
              </h2>
              <p>
                The customer is responsible for the lawful use of leads
                generated. Leadhaus operates outreach under UK GDPR legitimate
                interest and PECR soft opt in provisions where appropriate. Once
                contact data is exported and used outside Leadhaus
                infrastructure, the customer assumes full data controller
                responsibilities.
              </p>
              <p className="mt-4">
                The customer is responsible for the accuracy of the audience
                criteria provided during onboarding. Leadhaus is not liable for
                poor results caused by misleading or incomplete onboarding
                information.
              </p>
              <p className="mt-4">
                The customer is responsible for ensuring their business is
                lawful, that their offer is genuine, and that any claims made in
                outreach copy approved by them are truthful.
              </p>
            </div>

            {/* 8. Limitations */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                8. Limitations
              </h2>
              <p>
                Leadhaus does not guarantee specific numbers of replies,
                bookings, or sales. Lead generation outcomes depend on the
                customer&rsquo;s offer, market, pricing, and follow up. We commit to
                the volume of contacts and outreach activity stated in each
                plan, not to commercial outcomes.
              </p>
              <p className="mt-4">
                Leadhaus is not liable for any indirect or consequential losses
                arising from use of the service. Maximum liability in any
                circumstance is capped at the amount paid by the customer in the
                previous twelve months.
              </p>
            </div>

            {/* 9. Termination by Leadhaus */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                9. Termination by Leadhaus
              </h2>
              <p>
                Leadhaus reserves the right to terminate any customer
                relationship with thirty days notice in cases including but not
                limited to: customer breach of these terms, customer engagement
                in business sectors restricted under UK law, customer abuse of
                staff, or customer use of leads for purposes that breach UK GDPR
                or PECR.
              </p>
            </div>

            {/* 10. Data protection */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                10. Data protection
              </h2>
              <p>
                Leadhaus is registered with the UK Information Commissioner&rsquo;s
                Office and operates in compliance with UK GDPR. Full data
                handling practices are set out in the Privacy Policy.
              </p>
            </div>

            {/* 11. Governing law */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                11. Governing law
              </h2>
              <p>
                These terms are governed by the laws of England and Wales. Any
                disputes are subject to the exclusive jurisdiction of the courts
                of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
