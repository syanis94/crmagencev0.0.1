import type { AppIconName } from "@/components/icons/AppIcon";

export const navItems = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" }
] as const;

export const featureCards: ReadonlyArray<{
  title: string;
  description: string;
  icon: AppIconName;
  tone: "blue" | "orange" | "green" | "violet" | "purple" | "cyan";
}> = [
  { title: "Billetterie", description: "Vols, ferries et plus encore.", icon: "plane", tone: "blue" },
  { title: "Hôtels & Séjours", description: "Réservations et allotements.", icon: "bed", tone: "orange" },
  { title: "Visa & Consulat", description: "Suivi complet des dossiers.", icon: "document", tone: "green" },
  { title: "Clients & CRM", description: "Une relation client plus forte.", icon: "users", tone: "violet" },
  { title: "Finance & Facturation", description: "Contrôlez votre activité.", icon: "chart", tone: "purple" },
  { title: "Multi-agence", description: "Gérez vos sous-agences.", icon: "box", tone: "cyan" }
];

export const benefits = [
  { title: "Gain de temps", description: "Automatisez vos tâches", icon: "bolt" as const },
  { title: "Sécurité", description: "Vos données en sécurité", icon: "shield" as const },
  { title: "Croissance", description: "Développez votre activité", icon: "chart" as const }
] as const;

export const trustBrands = ["AIR ALGERIE", "TURKISH AIRLINES", "Emirates", "AIRFRANCE", "Booking.com", "amadeus"] as const;
