import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SecurytechIT | Soporte Informático y Seguridad Electrónica",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
