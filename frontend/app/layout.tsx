import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TopContactBar from "@/components/TopContactBar";
import FloatingContactRail from "@/components/FloatingContactRail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SecurytechIT | Soporte Informático y Seguridad Electrónica",
    template: "%s | SecurytechIT",
  },
  description:
    "Expertos en ingeniería, soporte informático, mantenimiento de hardware e instalación de cámaras de seguridad CCTV en Chilpancingo, Guerrero.",
  keywords: [
    "soporte informático",
    "mantenimiento de hardware",
    "CCTV",
    "cámaras de seguridad",
    "Chilpancingo",
    "reparación de computadoras",
  ],
  authors: [{ name: "SecurytechIT" }],
  creator: "SecurytechIT",
  metadataBase: new URL("https://www.securytechit.com"),
  openGraph: {
    title: "SecurytechIT | Soporte Informático y Seguridad Electrónica",
    description:
      "Soluciones tecnológicas profesionales en Chilpancingo, Guerrero. Soporte informático, mantenimiento, CCTV.",
    url: "https://www.securytechit.com",
    siteName: "SecurytechIT",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "SecurytechIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecurytechIT | Soporte Informático y Seguridad Electrónica",
    description:
      "Soluciones tecnológicas profesionales en Chilpancingo, Guerrero.",
    images: ["/img/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SecurytechIT",
  image: "https://www.securytechit.com/img/og-image.png",
  "@id": "https://www.securytechit.com",
  url: "https://www.securytechit.com",
  telephone: "+525668071790",
  email: "seguritech111@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chilpancingo",
    addressRegion: "Guerrero",
    addressCountry: "MX",
  },
  sameAs: [
    "https://www.instagram.com/seguritech_mx",
    "https://www.facebook.com/share/1CdBYX2moR/",
  ],
  areaServed: {
    "@type": "City",
    name: "Chilpancingo",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopContactBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <FloatingContactRail />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
