import Image from "next/image";
import { AppIcon } from "@/components/icons/AppIcon";
import { Container } from "@/components/ui/Container";
import styles from "./landing.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="landing-hero-title">
      <Container className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>
            La solution tout-en-un pour les agences de voyage
          </span>

          <h1 id="landing-hero-title">
            <span>Gérez votre agence</span>
            <span>de voyage plus</span>
            <span className={styles.heroAccent}>simplement</span>
          </h1>

          <p>
            Une plateforme complète et moderne pour gérer vos clients, vos
            réservations, vos visas, vos fournisseurs et toute votre activité
            depuis un seul endroit.
          </p>

          <div className={styles.heroButtons}>
            <a className={styles.primaryButtonLarge} href="#contact">
              Demander une démo <AppIcon name="arrow" size={18} />
            </a>
            <a className={styles.secondaryButtonLarge} href="#apropos">
              <AppIcon name="play" size={20} /> Voir la vidéo
            </a>
          </div>

          <div className={styles.assurances} aria-label="Avantages inclus">
            <span><AppIcon name="check" size={16} /> Sans engagement</span>
            <span><AppIcon name="check" size={16} /> Configuration rapide</span>
            <span><AppIcon name="check" size={16} /> Support dédié</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Image
            src="/images/hero-reference.webp"
            alt="GestionVoyage présenté sur ordinateur et téléphone devant un paysage méditerranéen"
            width={604}
            height={580}
            priority
            unoptimized
            sizes="(max-width: 860px) 100vw, 58vw"
          />
        </div>
      </Container>
    </section>
  );
}
