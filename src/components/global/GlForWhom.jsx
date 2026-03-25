import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlForWhom.module.css';

const values = ['plant-based lifestyle', 'clean eating', 'sustainability'];
const finalMsg = 'A dessert aligned with your values';

function TypeWriter({ text, onDone }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => { setDisplayed(''); setIdx(0); }, [text]);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed(p => p + text[idx]);
        setIdx(i => i + 1);
      }, 55);
      return () => clearTimeout(t);
    } else if (onDone) {
      const t = setTimeout(onDone, 1000);
      return () => clearTimeout(t);
    }
  }, [idx, text, onDone]);

  return (
    <span>
      {displayed}
      {idx < text.length && <span className={styles.cursor}>|</span>}
    </span>
  );
}

export default function GlForWhom() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [phase, setPhase] = useState('idle');
  const [valueIdx, setValueIdx] = useState(0);

  useEffect(() => {
    if (inView && phase === 'idle') {
      const t = setTimeout(() => setPhase('typing'), 600);
      return () => clearTimeout(t);
    }
  }, [inView, phase]);

  const handleDone = () => {
    if (valueIdx < values.length - 1) {
      setTimeout(() => setValueIdx(i => i + 1), 400);
    } else {
      setTimeout(() => setPhase('done'), 600);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner} ref={ref}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          FOR WHOM
        </motion.span>

        <motion.h2
          className={styles.mainCopy}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          You don't just eat.<br />
          <span className={styles.accent}>You choose.</span>
        </motion.h2>

        <div className={styles.typeBlock}>
          <div className={styles.values}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`${styles.value} ${i === valueIdx && phase === 'typing' ? styles.active : ''} ${i < valueIdx || (i === valueIdx && phase === 'done') ? styles.done : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView && (i <= valueIdx || phase === 'done') ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className={styles.bullet}>✦</span>
                {i === valueIdx && phase === 'typing' ? (
                  <TypeWriter text={v} onDone={handleDone} />
                ) : (
                  <span>{v}</span>
                )}
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {phase === 'done' && (
              <motion.div
                className={styles.finalMsg}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.divider} />
                <span>{finalMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className={styles.bgDeco}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          值
        </motion.div>
      </div>
    </section>
  );
}
