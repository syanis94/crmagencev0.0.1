import { AppIcon } from "@/components/icons/AppIcon";
import { Container } from "@/components/ui/Container";
import { featureCards } from "@/modules/landing/data/landing.data";
import styles from "./landing.module.css";

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className={styles.featuresSection}>
      <Container>
        <div className={styles.sectionIntro}>
          <span>TOUT CE DONT VOUS AVEZ BESOIN</span>
          <h2>Des outils puissants, pensés pour votre métier</h2>
          <p>GestionVoyage.com centralise toutes les fonctionnalités essentielles pour gérer votre agence de voyage efficacement.</p>
        </div>
        <div className={styles.featureGrid}>
          {featureCards.map((feature) => (
            <article key={feature.title} className={styles.featureCard} data-tone={feature.tone}>
              <div className={styles.featureIcon}><AppIcon name={feature.icon} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
