import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlPricing.module.css';

const products = [
  { name: 'Single Box', qty: '6 pieces', price: '$9', tag: null },
  { name: 'Double Pack', qty: '12 pieces', price: '$17', tag: 'Popular' },
  { name: 'Sabangsin Edition', qty: '4 flavors × 3 each', price: '$25', tag: 'Best Value' },
];

function PricingCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${product.tag === 'Best Value' ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {product.tag && (
        <div className={styles.tagBadge}>{product.tag}</div>
      )}
      <div className={styles.productIcon}>🌱</div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.productQty}>{product.qty}</div>
      <div className={styles.price}>{product.price}</div>

      <AnimatePresence>
        {hovered && (
          <motion.a
            href="#"
            className={styles.buyBtn}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Shop plant-based
          </motion.a>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GlPricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gl-pricing" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>PRICING</span>
          <h2 className={styles.title}>A small treat, a better choice</h2>
          <p className={styles.sub}>Hover to shop</p>
        </motion.div>

        <div className={styles.cards}>
          {products.map((p, i) => (
            <PricingCard key={i} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
