import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlFAQ.module.css';

const faqs = [
  { q: 'Is Yakgwa really 100% vegan?', a: 'Absolutely! Our Yakgwa contains zero animal products — no eggs, no dairy, no honey. We use only plant-based ingredients including allulose and upcycled soy pulp.' },
  { q: 'What is soy pulp (okara) and why is it special?', a: 'Soy pulp (okara in Japanese, 콩 in Korean) is the fiber-rich byproduct left over after making soy milk. Instead of discarding it, we upcycle it into our Yakgwa — adding nutrition and reducing food waste.' },
  { q: 'Is it really low sugar?', a: 'Yes! We use allulose as our primary sweetener, which has about 70% the sweetness of sugar but only 0.4 calories per gram. It\'s naturally found in figs and raisins, and does not spike blood sugar.' },
  { q: 'Do you ship internationally?', a: 'We currently ship to the US, EU, UK, Canada, Australia, and Japan. International orders typically arrive within 7-14 business days.' },
  { q: 'What does Yakgwa taste like?', a: 'Traditional Yakgwa has a unique texture — slightly chewy and dense, with a deep, rich sweetness. Our version is lighter and less sweet while maintaining that distinctive traditional character. Think: sophisticated, not overpowering.' },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        className={`${styles.question} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className={styles.qNum}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.qText}>{faq.q}</span>
        <motion.span
          className={styles.arrow}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.answerInner}>
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GlFAQ() {
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
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.title}>You might be wondering</h2>
        </motion.div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
