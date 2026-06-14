import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kinetik-dancers.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kinetik Dancers",
  title: "Kinetik Dancers | Street + Commercial Dance in Colwyn Bay",
  description:
    "Street + Commercial Dance for ages 10-15 in Colwyn Bay. Mondays 7-8pm with Keitija Knutova.",
  keywords: [
    "Kinetik Dancers",
    "gwersi dawns",
    "gwersi dawns plant",
    "gwersi dawns pobl ifanc",
    "dawns Gogledd Cymru",
    "gwersi dawns Bae Colwyn",
    "gwersi dawns Colwyn Bay",
    "street dance Colwyn Bay",
    "commercial dance Colwyn Bay",
    "street commercial dance",
    "dance classes",
    "children dance classes",
    "teen dance classes",
    "North Wales dance",
    "Colwyn Bay dance classes",
  ],
  authors: [{ name: "Kinetik Dancers" }],
  creator: "Kinetik Dancers",
  publisher: "Kinetik Dancers",
  openGraph: {
    title: "Kinetik Dancers | Street + Commercial Dance",
    description:
      "Street + Commercial Dance for ages 10-15 in Colwyn Bay. Mondays 7-8pm.",
    url: siteUrl,
    siteName: "Kinetik Dancers",
    images: [
      {
        url: "/kinetik-dance-hero.webp",
        width: 1672,
        height: 941,
        alt: "Kinetik Dancers street and commercial dance class",
      },
    ],
    locale: "cy_GB",
    alternateLocale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetik Dancers | Street + Commercial Dance",
    description:
      "Street + Commercial Dance for ages 10-15 in Colwyn Bay. Mondays 7-8pm.",
    images: ["/kinetik-dance-hero.webp"],
  },
  icons: {
    icon: "/kinetik-logo.jpg",
    apple: "/kinetik-logo.jpg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cy-GB">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Kinetik Dancers",
              url: siteUrl,
              image: `${siteUrl}/kinetik-dance-hero.webp`,
              description:
                "Street + Commercial Dance for ages 10-15 in Colwyn Bay. Mondays 7-8pm.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colwyn Bay",
                addressRegion: "Conwy",
                addressCountry: "GB",
              },
              sameAs: [
                "https://www.instagram.com/kinetikdancers",
              ],
              founder: {
                "@type": "Person",
                name: "Keitija Knutova",
              },
              event: {
                "@type": "Event",
                name: "Street + Commercial Dance Class",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                startDate: "2026-06-01T19:00:00+01:00",
                location: {
                  "@type": "Place",
                  name: "Colwyn Bay",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Colwyn Bay",
                    addressRegion: "Conwy",
                    addressCountry: "GB",
                  },
                },
                offers: {
                  "@type": "Offer",
                  price: "8",
                  priceCurrency: "GBP",
                  availability: "https://schema.org/InStock",
                },
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
