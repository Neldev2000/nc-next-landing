import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "./components/SchemaMarkup";
import FAQSchema from "./components/FAQSchema";
import WebVitals from "./components/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextCore | Plataforma de Gestión Integral para ISPs - Software FTTH",
  description: "Software especializado para Proveedores de Servicios de Internet (ISPs). Gestión de clientes FTTH, proyectos, soporte técnico y almacenes. Centraliza toda la operación de tu ISP en una sola plataforma.",
  keywords: "software ISPs, gestión FTTH, software proveedores internet, gestión clientes ISP, tickets soporte ISP, gestión almacenes ISP, OZMap, SmartOLT",
  authors: [{ name: "NextCore Team" }],
  creator: "NextCore",
  publisher: "NextCore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://next-core.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NextCore | Plataforma de Gestión Integral para ISPs",
    description: "Software especializado para Proveedores de Servicios de Internet. Gestión completa de clientes FTTH, proyectos y operaciones.",
    url: 'https://next-core.net',
    siteName: 'NextCore',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextCore - Plataforma de gestión para ISPs',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NextCore | Plataforma de Gestión Integral para ISPs",
    description: "Software especializado para Proveedores de Servicios de Internet. Gestión completa de clientes FTTH, proyectos y operaciones.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <SchemaMarkup />
        <FAQSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WebVitals analyticsId="nextcore-web-vitals" />
      </body>
    </html>
  );
}
