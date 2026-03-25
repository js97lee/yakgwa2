import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './KrHero.module.css';

export default function KrHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Background image */}
      <motion.div className={styles.bg} style={{ y }}>
        <img src="/hero-image.png" alt="" className={styles.bgVideo} />
        <div className={styles.bgOverlay} />
      </motion.div>

      {/* Content */}
      <motion.div className={styles.content} style={{ opacity }}>
        <motion.p
          className={styles.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          저당 · 고단백 · 100% 식물성 약과
        </motion.p>

        <motion.h1
          className={styles.mainCopy}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className={styles.subHeading}>달콤함은 그대로, 부담은 가볍게!</span>
          <span className={styles.accent}>프로틴 저당 종로약과</span>
        </motion.h1>

        <motion.p
          className={styles.subCopy}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          알룰로스와 콩으로 만든 저당 단백질 약과가 드디어 주인공이 되었습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <a href="#pricing" className={styles.ctaBtn}>
            지금 바로 가볍게 즐겨보기 →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className={styles.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span className={styles.scrollLabel}>scroll</span>
        <motion.div
          className={styles.scrollBar}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
