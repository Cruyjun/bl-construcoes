import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ 
  title = "B&L Construções – Construção Civil e Remodelação", 
  description = "Empresa de construção civil especializada em moradias, remodelações e reabilitação de edifícios em Portugal. Peça já o seu orçamento gratuito.",
  keywords = "construção civil, remodelações, empreiteiro, obras, reabilitação, construção moradias, Lisboa, Portugal",
  image = "/images/GN8mOCNqfngu.jpg"
}: SEOProps) {
  const siteTitle = title.includes("B&L Construções") ? title : `${title} | B&L Construções`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "B&L Construções",
          "image": image,
          "telephone": "+351 912 345 678",
          "email": "geral@blconstrucoes.pt",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua das Orquídeas, 2950-807",
            "addressLocality": "Lisboa",
            "postalCode": "1000-001",
            "addressCountry": "PT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.7223,
            "longitude": -9.1393
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
}
