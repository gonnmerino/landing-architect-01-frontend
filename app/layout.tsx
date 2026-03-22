import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FloatingButton from "./components/floating-button";
import { getContact } from "./libs/strapi/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Architect - Estudio de Arquitectura de Muestra (demo).",
  description: "Diseñamos espacios que trascienden lo estético para convertirse en experiencias habitables. Cada proyecto nace de una escucha profunda, se desarrolla con precisión y se materializa en una arquitectura que dialoga con su entorno, la luz y quienes la habitan.",
};
const contactRaw = await getContact();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Estudio de arquitectura enfocado en diseño contemporáneo, paisaje y materialidad." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Estudio de Arquitectura Contemporánea" />
        <meta property="og:description" content="Espacios diseñados para conectar con el entorno, la luz y quienes los habitan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://landing-architect-01-frontend.vercel.app/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estudio de Arquitectura Contemporánea" />
        <meta name="twitter:description" content="Diseño, paisaje y materialidad en cada proyecto." />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar contact={contactRaw} />
        {children}
        <Footer contact={contactRaw} />
        <FloatingButton contact={contactRaw} />

      </body>
    </html>
  );
}
