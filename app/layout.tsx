import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kinetik-dancers.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kinetik Dancers",
  title: "Kinetik Dancers | Gwersi Dawns ym Mae Colwyn",
  description:
    "Gwersi dawns i unrhyw un rhwng 10-15 oed ym Mae Colwyn gyda Keitija Knutova. Anfonwch neges am fwy o wybodaeth.",
  keywords: [
    "Kinetik Dancers",
    "gwersi dawns",
    "gwersi dawns plant",
    "gwersi dawns pobl ifanc",
    "dawns Gogledd Cymru",
    "gwersi dawns Bae Colwyn",
    "gwersi dawns Colwyn Bay",
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
    title: "Kinetik Dancers",
    description:
      "Gwersi dawns i unrhyw un rhwng 10-15 oed ym Mae Colwyn gyda Keitija Knutova.",
    url: siteUrl,
    siteName: "Kinetik Dancers",
    images: [
      {
        url: "/kinetik-logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Kinetik Dancers logo",
      },
    ],
    locale: "cy_GB",
    alternateLocale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetik Dancers",
    description:
      "Dance classes for anyone aged 10-15 in Colwyn Bay with Keitija Knutova.",
    images: ["/kinetik-logo.jpg"],
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
              image: `${siteUrl}/kinetik-logo.jpg`,
              description:
                "Welsh-first street and commercial dance classes for ages 10-15 in Colwyn Bay.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colwyn Bay",
                addressRegion: "Conwy",
                addressCountry: "GB",
              },
              sameAs: [
                "https://www.instagram.com/kinetikdancers",
                "https://www.instagram.com/step.one.performingarts",
                "https://www.instagram.com/autonomydancers",
              ],
              founder: {
                "@type": "Person",
                name: "Keitija Knutova",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
