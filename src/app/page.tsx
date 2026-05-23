import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, ScaleIn } from "@/components/Motion";
import { SavingsCalculator, DashboardWidget } from "@/components/ProductWidgets";

export const metadata: Metadata = {
  title: "Leadhaus | You need customers, not contacts",
  description: "We find your buyers, send the outreach, and deliver enquiries to your inbox. One fixed price every month.",
};

// ═══ CUSTOM OUTCOME FOCUS: INBOX PREVIEW WIDGET ═══
function InboxPreview() {
  return (
    <div className="w-full max-w-[480px] mx-auto bg-white border border-border shadow-md rounded-none overflow-hidden text-left">
      {/* Inbox Header Bar */}
      <div className="bg-surface px-4 py-3.5 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
        </div>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-muted">Inbox // Enquiries</span>
        <div className="w-4" />
      </div>
      
      {/* Email Header Details */}
      <div className="p-4 border-b border-border bg-surface/50 space-y-2">
        <div className="flex items-baseline justify-between text-xs">
          <span className="font-semibold text-foreground">From:</span>
          <span className="text-body flex-1 ml-2 truncate">James Mitchell &lt;james@apexlegal.co.uk&gt;</span>
          <span className="text-muted text-[10px]">Today, 09:42</span>
        </div>
        <div className="flex items-baseline text-xs">
          <span className="font-semibold text-foreground">Subject:</span>
          <span className="text-body flex-1 ml-2 font-medium">Re: Outbound legal services inquiry</span>
        </div>
        <div className="flex items-baseline text-xs">
          <span className="font-semibold text-foreground">To:</span>
          <span className="text-muted flex-1 ml-2">tahar@theleadhaus.io</span>
        </div>
      </div>

      {/* Email Body */}
      <div className="p-6 space-y-4 text-sm text-body leading-relaxed">
        <p className="font-semibold text-foreground">Hi Tahar,</p>
        <p>
          Thanks for reaching out. We have been struggling to find new clients for our conveyancing practice and are currently handling all of our email campaigns manually.
        </p>
        <p>
          Your service sounds exactly like what we need. Are you available for a brief call this Thursday at 2pm?
        </p>
        <div className="pt-4 border-t border-border/60">
          <p className="font-medium text-foreground">James Mitchell</p>
          <p className="text-xs text-muted">Managing Partner, Apex Legal</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background text-body">
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative overflow-hidden bg-background border-b border-border py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and copy */}
            <div className="lg:col-span-7 text-left space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 border border-border bg-surface px-3.5 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-foreground">
                    UK Managed Lead Generation
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-foreground tracking-tight leading-[1.1] text-4xl md:text-6xl">
                  You need customers, not contacts.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                  Mailchimp sends emails. Hubspot tracks pipelines. Salesforce manages accounts. None of them find you a single customer. Leadhaus does.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-body text-base leading-relaxed max-w-2xl">
                  We figure out exactly who your buyers are, where they spend their time, and what they need right now. Then we put your offer in front of them and bring the enquiries to your inbox. One fixed price every month. No software to learn. No list of your own required. Just customers landing in your inbox each week.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/pricing" className="btn-premium">
                    See pricing
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Book a call
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <Reveal delay={0.2}>
                <div className="p-3 bg-surface border border-border shadow-sm w-full max-w-[500px]">
                  <InboxPreview />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ MARQUEE STATS BAR ═══ */}
      <section className="py-6 bg-surface border-b border-border overflow-hidden">
        <div className="marquee">
          <div className="marquee-inner">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-16 shrink-0">
                {[
                  "237,000 verified contacts",
                  "42 percent average open rate",
                  "30,000 new contacts added daily",
                  "77 percent deliverability",
                  "Fixed monthly price",
                  "GDPR compliant",
                  "ICO registered",
                ].map((t) => (
                  <span key={`${rep}-${t}`} className="text-xs font-semibold uppercase tracking-wider text-body flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: THE PROBLEM (EVERYONE ELSE IS A POSTMAN) ═══ */}
      <section className="py-20 md:py-32 bg-background border-b border-border text-center">
        <div className="mx-auto max-w-[800px] px-6 lg:px-8 space-y-6">
          <Reveal>
            <p className="text-accent font-semibold text-xs uppercase tracking-widest">
              The Problem with outreach
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
              Everyone else is just a postman.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-body text-base md:text-lg leading-relaxed space-y-6 text-left md:text-center">
              <p>
                Mailchimp, MailerLite, Brevo, EmailOctopus, SendX. All of them are sending tools. They wait for you to upload a list, then they deliver to it. If you do not have a list, they cannot help you. If your list is stale or has been hammered by every other marketer who bought the same data, they cannot help you either.
              </p>
              <p>
                The problem is that finding the right people to email is the hard part. Sending the email is trivial. Yet the entire industry has built itself around the trivial part and ignored the hard part.
              </p>
              <p className="font-semibold text-foreground text-lg">
                Leadhaus does the hard part.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SECTION 3: HOW WE ARE DIFFERENT ═══ */}
      <section className="py-20 md:py-32 bg-surface border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 space-y-16">
          <Reveal>
            <div className="text-center space-y-4">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                Our approach
              </p>
              <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                We find them. We send to them. You get the enquiries.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh leads, built for you",
                body: "Every lead in your database is found live, this week, specifically for your business. No recycled lists. No data that ten other companies have already burned through. Yours and yours alone.",
              },
              {
                title: "Sent for you, not by you",
                body: "We run the outreach from our infrastructure on your behalf. Throttled at safe volumes to protect deliverability. Sequenced based on how recipients behave. You never touch a sending tool.",
              },
              {
                title: "Reported in plain English",
                body: "Every Monday morning you get a one page summary showing how many leads were contacted, how many opened, how many replied, how many booked a call. No jargon. No graphs you need a degree to read.",
              },
            ].map((col, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-background border border-border p-8 md:p-10 space-y-4 h-full shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">{col.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{col.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: COMPARISON TABLE ═══ */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="text-left space-y-4">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                Comparing options
              </p>
              <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                What you actually get for your money.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto border border-border shadow-sm">
              <table className="min-w-full divide-y divide-border border-collapse text-left text-sm">
                <thead className="bg-surface">
                  <tr className="divide-x divide-border">
                    <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-foreground w-[30%]">
                      DELIVERABLES
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold text-accent bg-accent/5 w-[14%]">
                      Leadhaus
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-foreground w-[14%]">
                      Mailchimp
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-foreground w-[14%]">
                      MailerLite
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-foreground w-[14%]">
                      Brevo
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-foreground w-[14%]">
                      EmailOctopus
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-border">
                  {[
                    { f: "Provides fresh leads", l: "Yes", m: "No", ml: "No", b: "No", eo: "No" },
                    { f: "Sends the outreach for you", l: "Yes", m: "No", ml: "No", b: "No", eo: "No" },
                    { f: "Plain English reporting", l: "Yes", m: "No", ml: "No", b: "No", eo: "No" },
                    { f: "Charges per contact", l: "No", m: "Yes", ml: "Yes", b: "Partial", eo: "Yes" },
                    { f: "Hidden fees for unsubscribed contacts", l: "No", m: "Yes", ml: "No", b: "No", eo: "No" },
                    { f: "Bring your own list required", l: "No", m: "Yes", ml: "Yes", b: "Yes", eo: "Yes" },
                  ].map((row, idx) => (
                    <tr key={idx} className="divide-x divide-border hover:bg-surface/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{row.f}</td>
                      <td className="px-6 py-4 font-bold text-accent bg-accent/5">{row.l}</td>
                      <td className="px-6 py-4 text-body">{row.m}</td>
                      <td className="px-6 py-4 text-body">{row.ml}</td>
                      <td className="px-6 py-4 text-body">{row.b}</td>
                      <td className="px-6 py-4 text-body">{row.eo}</td>
                    </tr>
                  ))}
                  <tr className="divide-x divide-border bg-surface/20 font-semibold">
                    <td className="px-6 py-4 text-foreground">Starting monthly price for 25,000 contacts</td>
                    <td className="px-6 py-4 text-accent bg-accent/5">£497</td>
                    <td className="px-6 py-4 text-body">$270</td>
                    <td className="px-6 py-4 text-body">$145</td>
                    <td className="px-6 py-4 text-body">$69 to $499</td>
                    <td className="px-6 py-4 text-body">$36</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-body leading-relaxed max-w-4xl">
              Prices for competitors verified April 2026 from each provider's published rates. They charge less for sending alone because that is all they do. Leadhaus includes the lead generation, the sending, and the reporting as one fixed price.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ SECTION 5: WHO LEADHAUS IS FOR ═══ */}
      <section className="py-20 md:py-32 bg-surface border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 space-y-12">
          <Reveal>
            <div className="text-left space-y-4">
              <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                Target audience
              </p>
              <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                If you sell to businesses or to consumers, we work for you.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.05}>
              <div className="border border-border bg-background p-8 md:p-12 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Selling to businesses
                </h3>
                <p className="text-body text-base leading-relaxed">
                  Solicitors, accountants, recruiters, agencies, consultants, business to business services. We find decision makers by job title, industry, company size, and geography. Verified contact data delivered into your sending sequence every week.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-border bg-background p-8 md:p-12 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Selling to consumers
                </h3>
                <p className="text-body text-base leading-relaxed">
                  Tradespeople, gyms, coaches, local services. We monitor public intent signals such as new home purchases, new business incorporations, planning permission filings, and active social conversations in your area. Warm prospects who have just become buyers for what you sell.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: PROOF ═══ */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                  Proven performance
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                  Built and tested on our own business.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-4 text-body text-base leading-relaxed">
                  <p>
                    Leadhaus is the engine behind BlockHaus, our crypto real estate platform. In ten weeks of live operation we have built a database of 237,000 verified contacts, growing by approximately 30,000 every day. Open rates average 42 percent. Deliverability sits at 77 percent. Bounce rates stay below 23 percent because the database cleans itself in real time.
                  </p>
                  <p>
                    These are not numbers we read in a case study. They are the numbers our own infrastructure produces every day. We use Leadhaus on Leadhaus.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Stats Grid Column */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "237,000", label: "verified contacts and growing" },
                    { value: "30,000", label: "new contacts added daily" },
                    { value: "42%", label: "average open rate" },
                    { value: "77%", label: "deliverability across all sends" },
                  ].map((stat, i) => (
                    <div key={i} className="border border-border bg-surface p-6 shadow-sm">
                      <p className="text-3xl md:text-4xl font-extrabold text-accent mb-2">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-body uppercase tracking-wider leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ COST CALCULATOR ═══ */}
      <section className="py-20 md:py-32 bg-surface border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <Reveal>
              <div className="text-center space-y-4">
                <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                  Cost calculator
                </p>
                <h2 className="text-foreground text-3xl md:text-5xl leading-tight">
                  Compare your options
                </h2>
              </div>
            </Reveal>
            <ScaleIn delay={0.1}>
              <div className="p-3 bg-background border border-border shadow-sm">
                <SavingsCalculator />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-36 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-8">
              <h2 className="text-foreground tracking-tight text-3xl md:text-6xl leading-tight">
                Stop renting lists. Start receiving customers.
              </h2>
              <p className="text-body text-base md:text-lg max-w-2xl leading-relaxed">
                Pick a plan that matches your business. Tell us who you sell to. Within two weeks you will have a working pipeline delivering enquiries to your inbox.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link href="/pricing" className="btn-premium">
                  See pricing
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book a twenty minute call
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
