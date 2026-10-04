import Image from "next/image";
import { AppIcon } from "@/components/icons/AppIcon";
import { Container } from "@/components/ui/Container";
import { benefits } from "@/modules/landing/data/landing.data";
import styles from "./landing.module.css";

export function PartnerSection() {
  return (
    <section id="apropos" className={styles.partnerSection}>
      <Container className={styles.partnerGrid}>
        <div className={styles.videoCard}>
          <Image src="/images/airplane-window.svg" alt="Vue depuis un hublot d'avion" width={1200} height={900} />
          <span className={styles.videoPlay} aria-hidden="true"><AppIcon name="play" size={36} /></span>
        </div>
        <div className={styles.partnerCopy}>
          <span className={styles.kicker}>PLUS QU'UN LOGICIEL</span>
          <h2>Un partenaire pour<br />faire grandir votre agence</h2>
          <p>GestionVoyage.com vous accompagne dans votre développement avec une solution moderne, sécurisée et évolutive, conçue par des experts du voyage.</p>
          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <span className={styles.benefitIcon}><AppIcon name={benefit.icon} /></span>
                <p><strong>{benefit.title}</strong><small>{benefit.description}</small></p>
              </div>
            ))}
          </div>
          <a className={styles.outlineButton} href="#fonctionnalites">Découvrir la plateforme <AppIcon name="arrow" size={18} /></a>
        </div>
      </Container>
    </section>
  );
}
