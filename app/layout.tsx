import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kinetikdancers.co.uk"),
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
  openGraph: {
    title: "Kinetik Dancers",
    description:
      "Gwersi dawns i unrhyw un rhwng 10-15 oed ym Mae Colwyn gyda Keitija Knutova.",
    url: "https://kinetikdancers.co.uk",
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
    type: "website",
  },
  icons: {
    icon: "/kinetik-logo.jpg",
    apple: "/kinetik-logo.jpg",
  },
  alternates: {
    canonical: "https://kinetikdancers.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cy-GB">
      <body>{children}</body>
    </html>
  );
}
