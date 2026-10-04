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
          <Image
            src="/images/airplane-window-ai.webp"
            alt="Vue depuis un hublot d'avion au-dessus des nuages"
            width={760}
            height={623}
            sizes="(max-width: 860px) 100vw, 45vw"
          />
          <span className={styles.videoPlay} aria-hidden="true">
            <AppIcon name="play" size={36} />
          </span>
        </div>

        <div className={styles.partnerCopy}>
          <span className={styles.kicker}>PLUS QU'UN LOGICIEL</span>
          <h2>Un partenaire pour<br />faire grandir votre agence</h2>
          <p>
            GestionVoyage.com vous accompagne dans votre développement avec une
            solution moderne, sécurisée et évolutive, conçue pour les professionnels du voyage.
          </p>

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <span className={styles.benefitIcon}><AppIcon name={benefit.icon} /></span>
                <p><strong>{benefit.title}</strong><small>{benefit.description}</small></p>
              </div>
            ))}
          </div>

          <a className={styles.outlineButton} href="#fonctionnalites">
            Découvrir la plateforme <AppIcon name="arrow" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
