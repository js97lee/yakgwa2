import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Footer.module.css';

export default function Footer({ track }) {
  const isKr = track === 'kr';
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const links = isKr
    ? [
        { label: '브랜드 스토리', href: '#' },
        { label: '원재료 안내', href: '#' },
        { label: '구매하기', href: '#' },
        { label: '고객센터', href: '#' },
        { label: '인스타그램', href: '#' },
      ]
    : [
        { label: 'Our Story', href: '#' },
        { label: 'Ingredients', href: '#' },
        { label: 'Shop', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Instagram', href: '#' },
      ];

  return (
    <footer className={`${styles.footer} ${isKr ? styles.kr : styles.gl}`}>
      <motion.div
        ref={ref}
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandName}>
              <img
                src="/logo-h.png"
                alt="종로약과"
                className={`${styles.logoImg} ${isKr ? styles.kr : styles.gl}`}
              />
            </div>
          </div>

          <nav className={styles.links}>
            {links.map(link => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.social}>
            <p className={styles.socialLabel}>
              {isKr ? '팔로우하기' : 'Follow us'}
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 종로약과 JONGNO YAKGWA.{' '}
            {isKr ? '모든 권리 보유.' : 'All rights reserved.'}
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              {isKr ? '개인정보처리방침' : 'Privacy Policy'}
            </a>
            <span className={styles.sep}>·</span>
            <a href="#" className={styles.bottomLink}>
              {isKr ? '이용약관' : 'Terms of Use'}
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
