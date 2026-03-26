import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './NavBar.module.css';

export default function NavBar({ track, onLangSwitch }) {
  const [scrolled, setScrolled] = useState(false);
  const isKr = track === 'kr';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.logo}>
        <img
          src="/logo-h.png"
          alt="종로약과"
          className={`${styles.logoImg} ${!scrolled ? styles.logoWhite : ''}`}
        />
      </div>

      <div className={styles.right}>
        <button
          className={`${styles.langToggle} ${!scrolled ? styles.langToggleWhite : ''}`}
          onClick={onLangSwitch}
          aria-label="Switch language"
        >
          <span className={isKr ? styles.langActive : styles.langInactive}>KR</span>
          <span className={styles.langSlash}>/</span>
          <span className={!isKr ? styles.langActive : styles.langInactive}>EN</span>
        </button>
        <a href="#cta" className={`${styles.cta} ${isKr ? styles.ctaKr : styles.ctaGl}`}>
          {isKr ? '구매하기' : 'Shop Now'}
        </a>
      </div>
    </motion.nav>
  );
}
