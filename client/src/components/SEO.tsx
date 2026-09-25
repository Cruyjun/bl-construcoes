import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ 
  title = "B&L Construções – Reabilitação de Edifícios e Fachadas", 
  description = "Empresa especializada em reabilitação de edifícios, fachadas, impermeabilização e remodelações interiores com pintura, gesso cartonado, tetos falsos, redes de águas e pavimentos na Grande Lisboa.",
  keywords = "reabilitação de edifícios, reabilitação de fachadas, remodelações interiores, pintura, gesso cartonado, pladur, tetos falsos, divisórias, redes de águas e esgotos, pavimentos vinílicos, pavimentos flutuantes, rapel, andaimes, impermeabilização de telhados, alvará 121659, Lisboa",
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
          "telephone": "+351 928 095 224",
          "email": "geral@blconstrucoes.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua das Orquídeas 3",
            "addressLocality": "Pinhal das Formas",
            "postalCode": "2950-807",
            "addressCountry": "PT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.6103936,
            "longitude": -8.9672748
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
