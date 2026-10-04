import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "GestionVoyage — Gérez votre agence plus simplement",
  description: "La plateforme tout-en-un pour piloter clients, dossiers, réservations, visas, fournisseurs et finance.",
  metadataBase: new URL("https://gestionvoyage.com"),
  openGraph: {
    title: "GestionVoyage",
    description: "Simplifiez. Voyagez. Développez.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
