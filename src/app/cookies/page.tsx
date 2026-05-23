import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Leadhaus Cookie Policy. Information about how we use cookies and similar technologies on our website.",
  alternates: {
    canonical: "https://theleadhaus.io/cookies",
  },
};

export default function CookiesPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-foreground">Cookie Policy</h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: May 2026
          </p>

          <div className="mt-12 space-y-10 text-body leading-relaxed">
            {/* 1. About cookies */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                1. About cookies
              </h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They are widely used to make websites work
                efficiently and to provide information to the site operator. This
                policy explains what cookies we use and why.
              </p>
            </div>

            {/* 2. Cookies we use */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                2. Cookies we use
              </h2>

              <div className="mt-4">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Strictly necessary cookies
                </h3>
                <p>
                  These cookies are essential for the website to function. They
                  include authentication cookies that keep you logged in to your
                  dashboard and session cookies that remember your preferences
                  during a single visit. You cannot opt out of these cookies as
                  the website would not function without them.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Analytics cookies
                </h3>
                <p>
                  We use Vercel Analytics to understand how visitors use our
                  website. Vercel Analytics is privacy compliant and does not use
                  cookies for tracking individual users. It collects anonymised
                  data about page views and performance metrics without storing
                  personally identifiable information.
                </p>
              </div>
            </div>

            {/* 3. Cookies we do not use */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                3. Cookies we do not use
              </h2>
              <p>
                We do not use advertising cookies, remarketing pixels, social
                media tracking cookies, or any third party cookies that track
                your behaviour across other websites. We do not use Google
                Analytics.
              </p>
            </div>

            {/* 4. Third party cookies */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                4. Third party cookies
              </h2>
              <p>
                Our authentication provider (Clerk) and payment processor
                (Stripe) may set cookies necessary for their services to
                function. These are strictly necessary cookies required for
                login and payment processing. You can find their respective
                cookie policies on their websites.
              </p>
              <p className="mt-3">
                Our contact page includes a Calendly booking widget. Calendly
                may set cookies when you interact with the booking form. You can
                review Calendly&rsquo;s cookie policy on their website.
              </p>
            </div>

            {/* 5. Managing cookies */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                5. Managing cookies
              </h2>
              <p>
                You can control and manage cookies through your browser
                settings. Most browsers allow you to refuse cookies, delete
                existing cookies, or be notified before a cookie is set. Please
                note that disabling strictly necessary cookies may affect the
                functionality of the website.
              </p>
            </div>

            {/* 6. Changes to this policy */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                6. Changes to this policy
              </h2>
              <p>
                We may update this cookie policy from time to time to reflect
                changes in our practices or for legal, regulatory, or
                operational reasons. The date at the top of this page shows when
                it was last updated.
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                7. Contact
              </h2>
              <p>
                If you have questions about our use of cookies, please contact
                us through the form on our contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
