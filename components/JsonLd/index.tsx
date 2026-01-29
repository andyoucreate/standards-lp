interface JsonLdProps {
  locale: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emailoverflow.ai";

function JsonLd({ locale }: JsonLdProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "emailoverflow",
    url: BASE_URL,
    logo: `${BASE_URL}/icon-512.png`,
    description:
      locale === "fr"
        ? "Inspiration email marketing illimitée. Suivez vos concurrents et accédez à plus de 100M d'assets marketing."
        : "Unlimited email marketing inspiration. Track your competitors and access 100M+ marketing assets.",
    // Add social links when available
    // sameAs: [
    //   "https://twitter.com/emailoverflow",
    //   "https://linkedin.com/company/emailoverflow",
    // ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "emailoverflow",
    url: BASE_URL,
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    description:
      locale === "fr"
        ? "Suivez automatiquement les emails, publicités et landing pages de vos concurrents."
        : "Automatically track your competitors' emails, ads and landing pages.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "emailoverflow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: locale === "fr" ? "Essai gratuit disponible" : "Free trial available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}

export { JsonLd };
