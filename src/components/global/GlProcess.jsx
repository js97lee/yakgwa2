import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlProcess.module.css';

const steps = [
  {
    step: '01',
    icon: '🫘',
    title: 'Soybeans',
    desc: 'Premium soybeans\ncarefully selected',
  },
  {
    step: '02',
    icon: '✨',
    title: 'Soy Pulp Extracted',
    desc: 'The byproduct of soy milk\nupcycled into something special',
    highlight: true,
  },
  {
    step: '03',
    icon: '🍃',
    title: 'Plant-based Blend',
    desc: 'Mixed with allulose\nand natural ingredients',
  },
  {
    step: '04',
    icon: '🍪',
    title: 'Yakgwa Ready',
    desc: 'Traditional Korean dessert\nmade the better way',
    isLast: true,
  },
];

function Step({ step, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`${styles.step} ${step.highlight ? styles.highlight : ''} ${step.isLast ? styles.last : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={styles.stepNum}>{step.step}</div>
      <div className={styles.stepConnector}>
        <div className={styles.stepDot} />
        {!step.isLast && <div className={styles.stepLine} />}
      </div>
      <div className={styles.stepContent}>
        <div className={styles.stepIcon}>{step.icon}</div>
        <div className={styles.stepTitle}>{step.title}</div>
        <div className={styles.stepDesc}>{step.desc}</div>
      </div>
    </motion.div>
  );
}

export default function GlProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>INGREDIENT STORY</span>
          <h2 className={styles.title}>
            We don't throw it away.
          </h2>
          <p className={styles.titleAccent}>We turn it into something better.</p>
          <p className={styles.sub}>
            Soy pulp — the byproduct of soy milk production — is upcycled into our signature Yakgwa
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.before_after}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className={styles.ba_item}>
            <div className={styles.ba_icon}>🗑️</div>
            <div className={styles.ba_label}>Discarded Soy Pulp</div>
            <div className={styles.ba_desc}>Waste from soy milk production</div>
          </div>
          <motion.div
            className={styles.ba_arrow}
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.div>
          <div className={`${styles.ba_item} ${styles.ba_after}`}>
            <div className={styles.ba_icon}>🌟</div>
            <div className={styles.ba_label}>JONGNO YAKGWA Yakgwa</div>
            <div className={styles.ba_desc}>Upcycled plant-based dessert</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
