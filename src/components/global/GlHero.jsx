import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './GlHero.module.css';

export default function GlHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div className={styles.bg} style={{ y }}>
        <div className={styles.bgOverlay} />
        <div className={styles.leaves}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.leaf}
              style={{ left: `${8 + i * 16}%`, top: `${20 + (i % 3) * 20}%` }}
              animate={{
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeInOut',
              }}
            >
              🌿
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className={styles.content} style={{ opacity }}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          100% Plant-Based · Vegan · Low Sugar
        </motion.div>

        <motion.h1
          className={styles.mainCopy}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A lighter way<br />
          <span className={styles.accent}>to enjoy sweetness</span>
        </motion.h1>

        <motion.p
          className={styles.subCopy}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Plant-based Yakgwa made with low sugar fruits<br />
          & upcycled soy pulp
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a href="#gl-pricing" className={styles.ctaBtn}>
            <span>Shop plant-based</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        <motion.div
          className={styles.scrollHint}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.floatingCard}
        initial={{ opacity: 0, x: 60, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 1.0, type: 'spring', stiffness: 80 }}
      >
        <div className={styles.cardIcon}>🌿</div>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>Sabangsin Edition</div>
          <div className={styles.cardSub}>4 flavors · 4 energies</div>
        </div>
      </motion.div>

      {/* K-culture tag */}
      <motion.div
        className={styles.kTag}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className={styles.kTagLabel}>K-Dessert</span>
        <span className={styles.kTagSub}>Traditional · Modern · Vegan</span>
      </motion.div>
    </section>
  );
}
