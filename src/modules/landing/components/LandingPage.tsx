import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { PartnerSection } from "./PartnerSection";
import { TrustSection } from "./TrustSection";
import styles from "./landing.module.css";

export function LandingPage() {
  return (
    <main id="top" className={styles.page}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PartnerSection />
      <TrustSection />
    </main>
  );
}
