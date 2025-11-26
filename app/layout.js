import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Ideart - Soluciones Visuales en Quito | Rotulación, Sellos y Artículos Promocionales",
  description: "Servicios profesionales de rotulación, señalética, sellos, credenciales y artículos promocionales en Quito. Servicio a domicilio. Calidad garantizada.",
  keywords: "rotulación Quito, sellos Quito, gigantografías Quito, tarjetas de presentación Quito, artículos promocionales Quito, señalética Quito",
  authors: [{ name: "Ideart" }],
  openGraph: {
    title: "Ideart - Soluciones Visuales en Quito",
    description: "Rotulación, señalética, sellos y artículos promocionales con servicio a domicilio en Quito",
    type: "website",
    locale: "es_EC",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#DC2626",
};

export default function RootLayout({ children }) {
  // Schema Markup JSON-LD para SEO Local
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ideart",
    "image": "/images/logo.png",
    "description": "Soluciones de rotulación, señalética, sellos y artículos promocionales en Quito",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "telephone": "+593996097226",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Quito"
    },
    "serviceType": [
      "Rotulación",
      "Señalética",
      "Sellos",
      "Gigantografías",
      "Artículos Promocionales",
      "Credenciales",
      "Tarjetas de Presentación"
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
