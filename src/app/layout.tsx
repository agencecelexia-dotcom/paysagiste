import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jardins-de-prestige.fr"),
  title: {
    default: "Jardins de Prestige | Paysagiste de Luxe à Lyon",
    template: "%s | Jardins de Prestige",
  },
  description:
    "Paysagiste haut de gamme à Lyon. Création de jardins d'exception, aménagement paysager, entretien et élagage. Devis gratuit.",
  keywords: [
    "paysagiste lyon",
    "jardin de luxe",
    "aménagement paysager",
    "création jardin",
    "entretien jardin lyon",
    "paysagiste haut de gamme",
  ],
  authors: [{ name: "Jardins de Prestige" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Jardins de Prestige",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
