import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlCTA.module.css';

export default function GlCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner} ref={ref}>
        <motion.div
          className={styles.decoText}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Yakgwa
        </motion.div>

        <motion.span
          className={styles.label}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          JONGNO YAKGWA · 종로약과
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Enjoy sweetness,<br />
          <span className={styles.accent}>the lighter way</span>
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          A traditional Korean dessert, reimagined for<br />
          the modern, conscious consumer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.a
            href="#"
            className={styles.ctaBtn}
            animate={{ boxShadow: [
              '0 4px 24px rgba(92,138,92,0.35)',
              '0 4px 24px rgba(92,138,92,0.35), 0 0 0 8px rgba(92,138,92,0.08)',
              '0 4px 24px rgba(92,138,92,0.35), 0 0 0 16px rgba(92,138,92,0)',
              '0 4px 24px rgba(92,138,92,0.35)',
            ]}}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            Shop plant-based →
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.badges}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {['🌱 100% Vegan', '♻️ Upcycled Soy Pulp', '💚 Low Sugar'].map(b => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
