import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define the static paths we support
export function generateStaticParams() {
  return [
    { slug: "leadhaus-vs-mailchimp" },
    { slug: "leadhaus-vs-smartlead" },
    { slug: "leadhaus-vs-lemlist" },
  ];
}

interface ComparisonData {
  title: string;
  metaDesc: string;
  headline: string;
  eyebrow: string;
  subtitle: string;
  comparisonTableTitle: string;
  whyLHHeading: string;
  whyLHText: string;
  row1Title: string;
  row1LH: string;
  row1Comp: string;
  row2Title: string;
  row2LH: string;
  row2Comp: string;
  row3Title: string;
  row3LH: string;
  row3Comp: string;
  summaryText: string;
  competitorName: string;
}

const comparisons: Record<string, ComparisonData> = {
  "leadhaus-vs-mailchimp": {
    competitorName: "Mailchimp",
    title: "Leadhaus vs Mailchimp | Sourced Leads vs Newsletter Delivery",
    metaDesc: "Compare Leadhaus and Mailchimp. Mailchimp requires you to bring your own list. Leadhaus builds your database live and runs the outreach for you.",
    eyebrow: "Leadhaus vs Mailchimp",
    headline: "You need customers, not a newsletter delivery tool",
    subtitle: "Mailchimp is built to send newsletters to people who already know you. Leadhaus is built to find new clients who do not know you yet.",
    comparisonTableTitle: "How we differ from newsletter tools",
    whyLHHeading: "Why our clients choose Leadhaus over Mailchimp",
    whyLHText: "Newsletter platforms wait for you to upload a list of contacts. If you do not have a list, they cannot help you. Leadhaus does the hard part. We build your prospect database from scratch, verify every record, write the copy, and run the outreach.",
    row1Title: "Contact Database",
    row1LH: "We build your custom list of leads live every single week",
    row1Comp: "You must upload your own database of email addresses",
    row2Title: "Technical Configuration",
    row2LH: "We manage all sending infrastructure and domain setups",
    row2Comp: "You must configure DNS records and verify ownership",
    row3Title: "Copywriting and Strategy",
    row3LH: "Our copy team writes and sequences natural email outreach",
    row3Comp: "You must design templates and write the text yourself",
    summaryText: "If you want to send updates to existing customers, Mailchimp is a good choice. If you want to acquire new business customers, Leadhaus is the complete solution.",
  },
  "leadhaus-vs-smartlead": {
    competitorName: "Smartlead",
    title: "Leadhaus vs Smartlead | Sourced Enquiries vs Complex Cold Email SaaS",
    metaDesc: "Compare Leadhaus and Smartlead. Smartlead is a cold email tool requiring complex setup. Leadhaus delivers hot enquiries with zero software to learn.",
    eyebrow: "Leadhaus vs Smartlead",
    headline: "We deliver actual results, not software to configure",
    subtitle: "Smartlead is a powerful cold email engine built for sales teams who want to build their own setups. Leadhaus does all the heavy lifting for you.",
    comparisonTableTitle: "Done For You vs Software Config",
    whyLHHeading: "Why our clients choose Leadhaus over Smartlead",
    whyLHText: "To use cold email software, you have to buy multiple domains, configure complex records, run warmups, source lists, write copy, and manage a unified inbox daily. Leadhaus is a complete service. We handle the entire infrastructure, and you just watch the replies arrive.",
    row1Title: "Technical Setup",
    row1LH: "Zero config required. We manage the domains and inboxes.",
    row1Comp: "You must purchase domains and configure DNS records.",
    row2Title: "Lead Sourcing",
    row2LH: "We source custom, exclusive leads live every week.",
    row2Comp: "You must connect external databases and import lists.",
    row3Title: "Work Required",
    row3LH: "We read, sort, and deliver hot sales enquiries to you.",
    row3Comp: "You must log in daily to manage sequences and replies.",
    summaryText: "If you have a dedicated sales team ready to manage complex systems, Smartlead is a strong engine. If you want enquiries delivered without the work, Leadhaus is for you.",
  },
  "leadhaus-vs-lemlist": {
    competitorName: "Lemlist",
    title: "Leadhaus vs Lemlist | Sourced Leads vs Multichannel Sales Software",
    metaDesc: "Compare Leadhaus and Lemlist. Lemlist charges per user seat for outreach software. Leadhaus delivers custom prospects and runs the outreach for one price.",
    eyebrow: "Leadhaus vs Lemlist",
    headline: "Focus on closing sales, not editing sequences",
    subtitle: "Lemlist provides a user seat platform for sales representatives. Leadhaus provides a fully managed outreach system that fills your pipeline.",
    comparisonTableTitle: "Managed Pipeline vs Per User SaaS",
    whyLHHeading: "Why our clients choose Leadhaus over Lemlist",
    whyLHText: "Lemlist charges per user seat and expects your sales representatives to spend their days building lists, setting up campaigns, and checking notifications. Leadhaus does not charge seat fees. We handle the lead generation and outreach, letting your team focus on closing sales.",
    row1Title: "Seat Fees",
    row1LH: "One fixed monthly price with unlimited team access",
    row1Comp: "Charges per user seat, scaling up as your team grows",
    row2Title: "Deliverability Setup",
    row2LH: "We build and monitor all sending servers and reputation",
    row2Comp: "Your team must manage warmups and sender profiles",
    row3Title: "Outreach Management",
    row3LH: "Fully managed. You only step in when a lead wants to buy.",
    row3Comp: "Your sales reps must monitor and run the software.",
    summaryText: "If you want your sales representatives to spend hours operating outreach software, Lemlist is a good tool. If you want them focused on calls with interested buyers, Leadhaus is the answer.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons[slug];
  if (!comp) return {};
  return {
    title: comp.title,
    description: comp.metaDesc,
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparisons[slug];

  if (!comp) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}>
      {/* Hero section */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ textAlign: "center" }}>{comp.eyebrow}</span>
          <h1 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "var(--color-foreground)",
            marginBottom: 24,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            {comp.headline}
          </h1>
          <p style={{
            fontSize: 18,
            color: "var(--color-body)",
            lineHeight: 1.6,
            maxWidth: 680,
            margin: "0 auto 32px"
          }}>
            {comp.subtitle}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/pricing" className="btn btn-warm btn-lg">See pricing</Link>
            <Link href="/contact" className="btn btn-dark btn-lg">Book a call</Link>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <div className="section-header" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, marginBottom: 12 }}>{comp.comparisonTableTitle}</h2>
          </div>

          <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12, marginTop: 32 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, textAlign: "left" }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "18px 24px", fontWeight: 600 }}>Approach</th>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-accent)", padding: "18px 24px", fontWeight: 700, textAlign: "center", width: "40%" }}>Leadhaus</th>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "18px 24px", fontWeight: 600, textAlign: "center", width: "40%" }}>{comp.competitorName}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "18px 24px", fontWeight: 600, color: "var(--color-foreground)" }}>{comp.row1Title}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-foreground)", backgroundColor: "oklch(59% 0.130 34 / 0.02)", fontWeight: 500 }}>{comp.row1LH}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-body)" }}>{comp.row1Comp}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "18px 24px", fontWeight: 600, color: "var(--color-foreground)" }}>{comp.row2Title}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-foreground)", backgroundColor: "oklch(59% 0.130 34 / 0.02)", fontWeight: 500 }}>{comp.row2LH}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-body)" }}>{comp.row2Comp}</td>
                </tr>
                <tr>
                  <td style={{ padding: "18px 24px", fontWeight: 600, color: "var(--color-foreground)" }}>{comp.row3Title}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-foreground)", backgroundColor: "oklch(59% 0.130 34 / 0.02)", fontWeight: 500 }}>{comp.row3LH}</td>
                  <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--color-body)" }}>{comp.row3Comp}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 16, color: "var(--color-foreground)" }}>{comp.whyLHHeading}</h2>
          <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.8, marginBottom: 24 }}>
            {comp.whyLHText}
          </p>
          <p style={{ fontSize: 16, color: "var(--color-foreground)", fontWeight: 600, fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", borderLeft: "3px solid var(--color-accent)", paddingLeft: 16 }}>
            {comp.summaryText}
          </p>
        </div>
      </section>
    </div>
  );
}
