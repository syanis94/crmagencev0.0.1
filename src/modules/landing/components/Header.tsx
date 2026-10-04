"use client";

import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { AppIcon } from "@/components/icons/AppIcon";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/modules/landing/data/landing.data";
import styles from "./landing.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <a href="#login" className={styles.loginLink}>Se connecter</a>
          <a href="#contact" className={styles.primaryButton}>Commencer <AppIcon name="arrow" size={17} /></a>
          <button className={styles.languageButton} type="button" aria-label="Langue actuelle : français">FR⌄</button>
        </div>
        <button className={styles.menuButton} type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          <AppIcon name={open ? "close" : "menu"} />
        </button>
      </Container>
      {open && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="#login" onClick={() => setOpen(false)}>Se connecter</a>
          <a className={styles.primaryButton} href="#contact" onClick={() => setOpen(false)}>Commencer <AppIcon name="arrow" size={17} /></a>
        </div>
      )}
    </header>
  );
}
