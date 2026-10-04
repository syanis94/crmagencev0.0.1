import styles from "@/modules/landing/components/landing.module.css";

export function Logo() {
  return (
    <a href="#top" className={styles.brand} aria-label="GestionVoyage — accueil">
      <span className={styles.brandMark} aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M42.4 6.5c-1.9-1.2-4.3-.9-5.9.7L25.9 17.8 8.8 10.4 4 15.2l13.3 10.6-7.7 7.7-5.1-1.9-3.1 3.1 7.4 5.4 5.4 7.4 3.1-3.1-1.9-5.1 7.7-7.7L33.8 45l4.8-4.8-7.4-17.1L41.8 12.5c1.6-1.6 1.9-4 .6-6Z" />
        </svg>
      </span>
      <span className={styles.brandCopy}>
        <strong>Gestion<span>Voyage</span></strong>
        <small>Simplifiez. Voyagez. Développez.</small>
      </span>
    </a>
  );
}
