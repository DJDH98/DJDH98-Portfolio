import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://djdh98.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DJDH98 | Developer Portfolio",
    template: "%s | DJDH98",
  },
  description:
    "DJDH98 builds thoughtful digital tools and interactive experiences with a focus on clean interfaces, practical systems, and careful execution.",
  applicationName: "DJDH98 Portfolio",
  authors: [{ name: "DJDH98", url: siteUrl }],
  creator: "DJDH98",
  publisher: "DJDH98",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "DJDH98 | Developer Portfolio",
    description:
      "Thoughtful digital tools and interactive experiences by developer DJDH98.",
    siteName: "DJDH98",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DJDH98 developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJDH98 | Developer Portfolio",
    description:
      "Thoughtful digital tools and interactive experiences by developer DJDH98.",
    creator: "@dalen_harris",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
