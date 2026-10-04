import { AppIcon } from "@/components/icons/AppIcon";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "./DashboardMockup";
import styles from "./landing.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroScenery} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>La solution tout-en-un pour les agences de voyage</span>
          <h1>Gérez votre agence<br />de voyage plus<br /><em>simplement</em></h1>
          <p>Une plateforme complète et moderne pour gérer vos clients, vos réservations, vos visas, vos fournisseurs et toute votre activité depuis un seul endroit.</p>
          <div className={styles.heroButtons}>
            <a className={styles.primaryButtonLarge} href="#contact">Demander une démo <AppIcon name="arrow" size={18} /></a>
            <a className={styles.secondaryButtonLarge} href="#apropos"><AppIcon name="play" size={20} /> Voir la vidéo</a>
          </div>
          <div className={styles.assurances}>
            <span><AppIcon name="check" size={16} /> Sans engagement</span>
            <span><AppIcon name="check" size={16} /> Configuration rapide</span>
            <span><AppIcon name="check" size={16} /> Support dédié</span>
          </div>
        </div>
        <DashboardMockup />
      </Container>
    </section>
  );
}
