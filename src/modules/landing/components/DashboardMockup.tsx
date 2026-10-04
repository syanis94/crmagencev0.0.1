import Image from "next/image";
import styles from "./landing.module.css";

export function DashboardMockup() {
  return (
    <div className={styles.deviceStage} aria-label="Aperçu de GestionVoyage sur ordinateur et mobile">
      <div className={styles.laptop}>
        <div className={styles.laptopScreen}>
          <Image src="/images/dashboard-reference.svg" alt="Tableau de bord GestionVoyage" width={1536} height={1024} priority />
        </div>
        <div className={styles.laptopBase} aria-hidden="true" />
      </div>
      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneHero}>
          <span>Dossiers</span>
          <strong>Trouvez votre prochaine destination</strong>
          <div className={styles.phoneSearch}>Où voulez-vous partir ?</div>
        </div>
        <div className={styles.phoneApps}>
          <span>✈</span><span>▣</span><span>⌂</span><span>⌘</span>
        </div>
      </div>
    </div>
  );
}
