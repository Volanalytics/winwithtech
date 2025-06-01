export function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WinWithTech",
    "url": "https://winwithtech.com",
    "logo": "https://winwithtech.com/favicon.svg",
    "description": "Transform your customer experience with WinWithTech's Genesys Cloud CX solutions. Expert implementation and support for small and medium businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11205 Lebanon Rd, #79",
      "addressLocality": "Mt Juliet",
      "addressRegion": "TN",
      "postalCode": "37122",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@winwithtech.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/winwithtech",
      "https://twitter.com/winwithtech"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Genesys Cloud CX Implementation",
          "description": "Enterprise-grade customer experience platform implementation for SMBs"
        },
        {
          "@type": "Offer",
          "name": "Web Development",
          "description": "Custom websites and web applications built with modern technologies"
        },
        {
          "@type": "Offer",
          "name": "Cloud Solutions",
          "description": "Enterprise-grade cloud infrastructure and services"
        },
        {
          "@type": "Offer",
          "name": "Business Reputation Management",
          "description": "AI-powered brand monitoring and reputation management"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
