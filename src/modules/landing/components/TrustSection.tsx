import { Container } from "@/components/ui/Container";
import { trustBrands } from "@/modules/landing/data/landing.data";
import styles from "./landing.module.css";

export function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <Container>
        <p>ILS NOUS FONT CONFIANCE</p>
        <div className={styles.trustBrands}>
          {trustBrands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </Container>
    </section>
  );
}
