export function JsonLd() {
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Leadhaus",
    url: "https://theleadhaus.io",
    description:
      "We find your buyers, send the outreach, and deliver enquiries to your inbox. One fixed price every month.",
    founder: {
      "@type": "Person",
      name: "Tahar Ali",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leadhaus",
    url: "https://theleadhaus.io",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Leadhaus Lead Generation",
    description:
      "Lead generation, outreach delivery, and weekly reporting. Fresh exclusive leads built for your business.",
    brand: {
      "@type": "Brand",
      name: "Leadhaus",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "497",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://theleadhaus.io/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "997",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://theleadhaus.io/pricing",
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: "1997",
        priceCurrency: "GBP",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://theleadhaus.io/pricing",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
}
