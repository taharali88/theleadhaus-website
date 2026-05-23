import Link from "next/link";

const sectors = [
  { slug: "recruiters", name: "Recruitment Agencies" },
  { slug: "accountants", name: "Accountancy Firms" },
  { slug: "solicitors", name: "Law Firms and Solicitors" },
  { slug: "agencies", name: "Marketing and Web Agencies" },
  { slug: "consultants", name: "Management Consultants" },
];

const regions = [
  {
    country: "United States",
    cities: [
      { slug: "new-york", name: "New York" },
      { slug: "san-francisco", name: "San Francisco" },
      { slug: "chicago", name: "Chicago" },
    ],
  },
  {
    country: "United Kingdom",
    cities: [
      { slug: "london", name: "London" },
      { slug: "birmingham", name: "Birmingham" },
      { slug: "manchester", name: "Manchester" },
    ],
  },
  {
    country: "Canada",
    cities: [
      { slug: "toronto", name: "Toronto" },
      { slug: "vancouver", name: "Vancouver" },
    ],
  },
  {
    country: "Australia",
    cities: [
      { slug: "sydney", name: "Sydney" },
      { slug: "melbourne", name: "Melbourne" },
    ],
  },
  {
    country: "Europe",
    cities: [
      { slug: "dublin", name: "Dublin" },
      { slug: "amsterdam", name: "Amsterdam" },
    ],
  },
];

export const metadata = {
  title: "Sectors We Serve | Global B2B Lead Generation | Leadhaus",
  description: "Explore the global locations and business sectors where Leadhaus delivers Done For You outbound B2B lead generation campaigns.",
};

export default function SectorsHubPage() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", padding: "80px 0" }}>
      <div className="wrap" style={{ maxWidth: 900 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow" style={{ textAlign: "center" }}>Sectors & Locations</span>
          <h1 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "var(--color-foreground)",
            marginBottom: 20
          }}>
            Global B2B Lead Generation Directory
          </h1>
          <p style={{
            fontSize: 17,
            color: "var(--color-body)",
            lineHeight: 1.6,
            maxWidth: 680,
            margin: "0 auto"
          }}>
            Leadhaus delivers premium, exclusive outbound campaigns for professional service firms. Select your region and industry below to claim your territory exclusivity.
          </p>
        </div>

        {/* Directory Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {regions.map((reg) => (
            <div
              key={reg.country}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 32,
                boxShadow: "0 4px 20px oklch(17% 0.024 58 / 0.03)"
              }}
            >
              <h2 style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 24,
                fontWeight: 700,
                color: "var(--color-foreground)",
                marginBottom: 24,
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: 12
              }}>
                {reg.country}
              </h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24
              }}>
                {reg.cities.map((city) => (
                  <div key={city.slug}>
                    <h3 style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 10
                    }}>
                      {city.name}
                    </h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0 }}>
                      {sectors.map((sec) => (
                        <li key={sec.slug}>
                          <Link
                            href={`/lead-generation/for-${sec.slug}-in-${city.slug}`}
                            className="sector-link"
                            style={{
                              fontSize: 14,
                              color: "var(--color-body)",
                              textDecoration: "none",
                              transition: "color 0.15s"
                            }}
                          >
                            For {sec.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exclusivity CTA */}
        <div style={{
          marginTop: 48,
          textAlign: "center",
          background: "oklch(59% 0.130 34 / 0.04)",
          border: "1.5px dashed var(--color-accent)",
          borderRadius: 12,
          padding: 32
        }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, marginBottom: 8, color: "var(--color-accent)" }}>
            Is your territory unclaimed?
          </h3>
          <p style={{ fontSize: 14, color: "var(--color-body)", lineHeight: 1.6, maxWidth: 620, margin: "0 auto 16px" }}>
            We only accept one client per industry per city to protect response rates and domain health. Claim your exclusive territory before your local competitors lock it down.
          </p>
          <Link href="/contact" className="btn btn-warm">
            Claim your exclusive region
          </Link>
        </div>

      </div>
      <style>{`
        .sector-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
}
