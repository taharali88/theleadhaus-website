import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Leadhaus | You need customers, not contacts",
    template: "%s | Leadhaus",
  },
  description:
    "We find your buyers, send the outreach, and deliver enquiries to your inbox. One fixed price every month. No software to learn. No list of your own required.",
  metadataBase: new URL("https://theleadhaus.io"),
  openGraph: {
    title: "Leadhaus | You need customers, not contacts",
    description:
      "We find your buyers, send the outreach, and deliver enquiries to your inbox. One fixed price every month.",
    url: "https://theleadhaus.io",
    siteName: "Leadhaus",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadhaus | You need customers, not contacts",
    description:
      "We find your buyers, send the outreach, and deliver enquiries to your inbox. One fixed price every month.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://theleadhaus.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
