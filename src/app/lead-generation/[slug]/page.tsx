import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Data mapping sectors
const sectors: Record<string, { name: string; display: string; plural: string; triggerText: string }> = {
  recruiters: {
    name: "Recruitment",
    display: "Recruitment Agencies",
    plural: "recruiters",
    triggerText: "Posted senior vacancy on LinkedIn",
  },
  accountants: {
    name: "Accounting",
    display: "Accountancy Firms",
    plural: "accountants",
    triggerText: "Registered new business entity",
  },
  solicitors: {
    name: "Legal",
    display: "Law Firms and Solicitors",
    plural: "solicitors",
    triggerText: "Opening new regional office branch",
  },
  agencies: {
    name: "Marketing",
    display: "Marketing and Software Agencies",
    plural: "agencies",
    triggerText: "Announced seed funding expansion",
  },
  consultants: {
    name: "Consulting",
    display: "Management Consultants",
    plural: "consultants",
    triggerText: "Filing new consulting trademark",
  },
};

// Data mapping cities
const cities: Record<
  string,
  {
    name: string;
    country: string;
    region: string;
    companies: string[];
    complianceType: "US" | "UK_EU" | "CA" | "AU";
  }
> = {
  london: {
    name: "London",
    country: "United Kingdom",
    region: "UK",
    companies: ["Tech London Partners", "Chelsea Advisors", "Camden Media"],
    complianceType: "UK_EU",
  },
  birmingham: {
    name: "Birmingham",
    country: "United Kingdom",
    region: "UK",
    companies: ["Midlands Logistics", "Bullring Digital", "Solihull Finance"],
    complianceType: "UK_EU",
  },
  manchester: {
    name: "Manchester",
    country: "United Kingdom",
    region: "UK",
    companies: ["Northern Creative", "Piccadilly Talent", "Salford Law"],
    complianceType: "UK_EU",
  },
  "new-york": {
    name: "New York",
    country: "United States",
    region: "US",
    companies: ["Manhattan Tech Ventures", "Broadway Capital", "Empire Marketing"],
    complianceType: "US",
  },
  "san-francisco": {
    name: "San Francisco",
    country: "United States",
    region: "US",
    companies: ["Golden Gate Engineering", "Silicon Valley Law", "Bay Area Partners"],
    complianceType: "US",
  },
  chicago: {
    name: "Chicago",
    country: "United States",
    region: "US",
    companies: ["Loop Consulting", "Midway Logistics", "Windy City Digital"],
    complianceType: "US",
  },
  toronto: {
    name: "Toronto",
    country: "Canada",
    region: "CA",
    companies: ["Ontario Ledger Group", "CN Tower Marketing", "Bay Street Partners"],
    complianceType: "CA",
  },
  vancouver: {
    name: "Vancouver",
    country: "Canada",
    region: "CA",
    companies: ["Pacific Crest Digital", "West Coast Law", "Gastown Consulting"],
    complianceType: "CA",
  },
  sydney: {
    name: "Sydney",
    country: "Australia",
    region: "AU",
    companies: ["Harbour Talent", "Opera House Consulting", "Darling Harbour Legal"],
    complianceType: "AU",
  },
  melbourne: {
    name: "Melbourne",
    country: "Australia",
    region: "AU",
    companies: ["Yarra Valley Finance", "Federation Media", "Carlton Partners"],
    complianceType: "AU",
  },
};

// Generate list of static params
export function generateStaticParams() {
  const paths = [];
  for (const sect in sectors) {
    for (const city in cities) {
      paths.push({ slug: `for-${sect}-in-${city}` });
    }
  }
  return paths;
}

// Helper to parse slug
function parseSlug(slug: string) {
  // Pattern: for-[industry]-in-[city]
  const match = slug.match(/^for-([a-z]+)-in-([a-z-]+)$/);
  if (!match) return null;
  const sectorKey = match[1];
  const cityKey = match[2];
  
  const sector = sectors[sectorKey];
  const city = cities[cityKey];

  if (!sector || !city) return null;

  return { sector, city, sectorKey, cityKey };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  const { sector, city } = parsed;
  return {
    title: `B2B Lead Generation for ${sector.display} in ${city.name} | Leadhaus`,
    description: `Stunning Done For You B2B lead generation and email outreach campaigns for ${city.name} ${sector.plural}. Zero tech setup. One exclusive client per territory.`,
  };
}

export default async function ProgrammaticLeadGenPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { sector, city } = parsed;

  // Compliance details by region
  const complianceTexts = {
    US: "Our outbound systems strictly comply with US federal CAN SPAM regulations. We implement clean corporate opt out footers, register physical business addresses, utilise verified clear headings, and process unsubscribe requests within two working days. Safe, professional, and compliant.",
    UK_EU: "Our campaign delivery is fully compliant with UK GDPR and PECR regulations. We conduct strict legitimate interest assessments, target only corporate body email addresses, scrub records against exclusion lists, and provide immediate one click opt out links on every outbound message.",
    CA: "Our outreach strategies align with CASL guidelines for corporate business relationships. We utilise verified business contact records, provide clear sender identification, maintain accurate corporate info, and provide a robust, immediate unsubscribe mechanism.",
    AU: "We ensure all outbound outreach meets the standards of the Australian Spam Act. Every campaign contains accurate sender identification details, validated B2B consent pathways, and functional unsubscribe options that process instantly.",
  };

  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}>
      {/* Hero section */}
      <section style={{ padding: "96px 0 64px", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ textAlign: "center" }}>
            {city.name} &bull; {city.country}
          </span>
          <h1 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(36px, 5.5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "var(--color-foreground)",
            marginBottom: 24,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            B2B Lead Generation for {sector.display} in {city.name}
          </h1>
          <p style={{
            fontSize: 18,
            color: "var(--color-body)",
            lineHeight: 1.6,
            maxWidth: 720,
            margin: "0 auto 36px"
          }}>
            We source your target prospects, write custom sequence copy, set up sending servers, and deliver active sales enquiries to your inbox. Done for you. One exclusive client per region.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-warm btn-lg">Claim your territory</Link>
            <Link href="/pricing" className="btn btn-dark btn-lg">View plans</Link>
          </div>
        </div>
      </section>

      {/* Exclusivity and Local leads preview */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "start" }}>
            
            {/* Left: Exclusivity */}
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 16 }}>
                Territory exclusivity lock for {city.name}
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 20 }}>
                Traditional software platforms sell lists and software seats to everyone. This means dozens of local {sector.plural} in {city.name} end up emailing the exact same companies, burning lists and destroying sender reputations.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 24 }}>
                Leadhaus operates on absolute exclusivity. We only partner with **one {sector.name.toLowerCase()} firm per city**. If you claim the {city.name} territory, we block your local competitors. Every lead sourced is one hundred percent exclusive to you.
              </p>
              
              <div style={{
                background: "oklch(59% 0.130 34 / 0.05)",
                border: "1.5px dashed var(--color-accent)",
                borderRadius: 8,
                padding: 20,
                textAlign: "left"
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-accent)", marginBottom: 4 }}>
                  Territory Checker Status
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-foreground)", marginBottom: 8 }}>
                  {sector.display} in {city.name} is currently: **Available**
                </div>
                <p style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>
                  This status is updated live. Competitor firms from the {city.name} area have not locked this sector yet. Click below to initiate your booking discussion.
                </p>
                <Link href="/contact" className="btn btn-warm" style={{ marginTop: 14, display: "inline-block" }}>
                  Lock your region
                </Link>
              </div>
            </div>

            {/* Right: Sourced Leads */}
            <div style={{
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 28,
              boxShadow: "0 4px 20px oklch(17% 0.024 58 / 0.03)"
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 16 }}>
                Fictional sample leads in {city.name}
              </h3>
              <p style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 20 }}>
                Here are examples of target prospects our database filters would capture for your outreach campaign this week based on buying signals:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {city.companies.map((company, index) => (
                  <div key={index} style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                    padding: 16
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 8, marginBottom: 8 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>{company}</div>
                        <div style={{ fontSize: 12, color: "var(--color-muted)" }}>{city.name} office</div>
                      </div>
                      <span style={{
                        fontSize: 9,
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        background: "var(--color-accent-bg)",
                        padding: "2px 6px",
                        borderRadius: 4
                      }}>
                        {sector.triggerText}
                      </span>
                    </div>
                    
                    <div style={{ display: "flex", gap: 16, fontSize: 11, color: "var(--color-muted)" }}>
                      <span style={{ filter: "blur(4.5px)" }}>contactname at company dot com</span>
                      <span style={{ filter: "blur(4.5px)" }}>plus forty four seven thousand</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--color-border)" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 16, color: "var(--color-foreground)" }}>
            Premium outbound B2B compliance
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 20 }}>
            {complianceTexts[city.complianceType]}
          </p>
          <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7 }}>
            We understand that outbound marketing represents your brand reputation. We do not use aggressive templates, spin scripts, or spam lists. Our copy team writes professional, personalized, one to one outreach messages that start genuine business relationships.
          </p>
        </div>
      </section>

      {/* Comparative Overview */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--color-surface)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>
              Done For You service vs. self service software
            </h2>
          </div>

          <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, textAlign: "left" }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "14px 20px" }}>Feature</th>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-accent)", padding: "14px 20px", fontWeight: 700 }}>Leadhaus DFY</th>
                  <th style={{ background: "var(--color-foreground)", color: "var(--color-background)", padding: "14px 20px" }}>Outbound Software</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600 }}>Technical setup</td>
                  <td style={{ padding: "14px 20px", backgroundColor: "oklch(59% 0.130 34 / 0.02)" }}>We buy domains and configure DNS</td>
                  <td style={{ padding: "14px 20px" }}>You must configure SPF, DKIM, and DMARC</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600 }}>Lead sourcing</td>
                  <td style={{ padding: "14px 20px", backgroundColor: "oklch(59% 0.130 34 / 0.02)" }}>We build your database live weekly</td>
                  <td style={{ padding: "14px 20px" }}>You must purchase external database credits</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600 }}>Copywriting</td>
                  <td style={{ padding: "14px 20px", backgroundColor: "oklch(59% 0.130 34 / 0.02)" }}>Our copy team writes all sequence texts</td>
                  <td style={{ padding: "14px 20px" }}>You must draft templates and spintax variables</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600 }}>Weekly labor</td>
                  <td style={{ padding: "14px 20px", backgroundColor: "oklch(59% 0.130 34 / 0.02)" }}>Zero hours. Enquiries land in your inbox</td>
                  <td style={{ padding: "14px 20px" }}>Approximately fifteen hours weekly tracking mailboxes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
