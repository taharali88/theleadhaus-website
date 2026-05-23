"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";

const faqSections = [
  {
    title: "General",
    questions: [
      {
        q: "What is Leadhaus actually doing for me?",
        a: "Two things at once. First we build you a database of people who are likely to buy what you sell, generated fresh and exclusive to your business. Second we run the outreach to them from our own infrastructure. You receive the enquiries. You never touch a sending tool.",
      },
      {
        q: "How is this different from Mailchimp or MailerLite?",
        a: "Mailchimp and MailerLite are sending tools. They assume you already have a list of people to email. If you do not have a list, they cannot help you. Leadhaus generates the list and sends to it. Two services in one fixed price.",
      },
      {
        q: "Will the leads be exclusive to me?",
        a: "Yes. Every contact in your database is generated for your business specifically based on the audience criteria you set in the onboarding questionnaire. We do not resell data. We do not run the same list across multiple clients.",
      },
      {
        q: "How fresh are the leads?",
        a: "Most contacts are added to your database within seven days of being generated. We monitor live signals such as new Companies House registrations and new Land Registry filings that are typically days old, not months. For social monitoring we capture conversations in real time.",
      },
    ],
  },
  {
    title: "Pricing and commitment",
    questions: [
      {
        q: "Why is there a six month minimum commitment?",
        a: "Lead generation works on compounding patterns. The first month builds the foundation, the second month optimises the sequences, and the third month onwards is when meaningful response volume arrives. A shorter commitment would not give the system enough time to produce the results you signed up for.",
      },
      {
        q: "Can I get a refund?",
        a: "Yes within fourteen days of sign up under UK consumer law. After fourteen days the six month minimum applies.",
      },
      {
        q: "What happens after six months?",
        a: "You move to a rolling monthly basis. You may cancel at any point with thirty days notice. We give you a clean export of your entire database when you leave.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. The price you see is the price you pay. There are no charges for unsubscribed contacts, no overage fees, no per email costs, no add on charges.",
      },
    ],
  },
  {
    title: "The leads themselves",
    questions: [
      {
        q: "Where do the leads come from?",
        a: "Multiple public and legitimate sources depending on your audience. For business leads: Companies House, professional registries, public LinkedIn data, industry directories. For consumer leads: HM Land Registry, planning permission portals, public social conversations on platforms that allow data access. All sources are compliant with UK GDPR and PECR rules on legitimate interest and direct marketing.",
      },
      {
        q: "What about GDPR?",
        a: "All Leadhaus activity is conducted under the legitimate interest basis permitted by UK GDPR for B2B outreach, and under the soft opt in rules permitted by PECR for consumer contact in specific situations. Every email we send includes a clear unsubscribe option and the sender identification required by law. We provide a full GDPR audit trail in your dashboard.",
      },
      {
        q: "What about deliverability and spam?",
        a: "We throttle daily sending volumes per client to protect sender reputation. We monitor bounce rates, complaint rates, and engagement metrics continuously. If any campaign starts to underperform we pause it and adjust before it damages your domain reputation. Our own infrastructure currently maintains 77 percent deliverability on a 237,000 contact database.",
      },
      {
        q: "What if a lead is no good?",
        a: "Bounces are binned automatically. Hard rejections are removed permanently. If you receive a contact that is clearly out of scope (wrong geography, wrong industry, wrong size) flag it in your dashboard and the database is corrected within twenty four hours.",
      },
    ],
  },
  {
    title: "Practical questions",
    questions: [
      {
        q: "Will I need to install anything?",
        a: "No. There is no software to install. Everything runs on our infrastructure. You log into a web dashboard to see results, that is the only interaction required.",
      },
      {
        q: "Can I upload my existing list to add to the database?",
        a: "Yes. CSV, Excel, or direct import from Mailchimp, HubSpot, MailerLite, or SendX. Your existing contacts are cleaned, deduplicated against your new Leadhaus contacts, and added to your campaigns.",
      },
      {
        q: "Can I see and approve the message templates before they go out?",
        a: "Yes. Every sequence is shared with you for approval before launch. You can edit templates at any time and the changes apply to all future sends.",
      },
      {
        q: "How quickly will I see results?",
        a: "First replies typically arrive within seven to ten days of campaigns going live. Meaningful conversion to bookings or sales usually starts in weeks three to four. We recommend not judging the system on the first fortnight alone.",
      },
      {
        q: "Who actually owns the data?",
        a: "You do. Every contact generated for your business is yours. On cancellation you receive a full export. We retain a copy only for the purposes of bounce suppression and audit compliance under UK law.",
      },
    ],
  },
  {
    title: "Working with Leadhaus",
    questions: [
      {
        q: "Can you build my website too?",
        a: "No. We focus on one thing, lead generation and outreach. We are happy to recommend website builders if you ask.",
      },
      {
        q: "Do you work with any industry?",
        a: "Almost any UK based business selling to other UK businesses, or any UK service business selling to consumers. We do not work with adult content, gambling, payday lending, or any sector restricted by UK financial promotion or advertising rules.",
      },
      {
        q: "What if I have more questions before signing up?",
        a: "Book a 20 minute call using the link on the contact page. The founder takes the call personally and will answer anything not covered here.",
      },
    ],
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-6 text-left group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-base font-semibold transition-colors duration-200 ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-accent" : "group-hover:text-accent"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm text-body leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQContent() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-foreground tracking-tight leading-[1.1] font-semibold mb-6">
              Frequently <span className="italic text-gold">asked</span> questions
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed">
              Everything you need to know about how Leadhaus works, what it costs, and what you can expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl space-y-16">
            {faqSections.map((section) => (
              <FadeInSection key={section.title}>
                <div>
                  <h2 className="text-xs font-bold text-accent tracking-widest uppercase mb-4">
                    {section.title}
                  </h2>
                  <div className="border-t border-border">
                    {section.questions.map((item) => (
                      <AccordionItem
                        key={item.q}
                        question={item.q}
                        answer={item.a}
                      />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
