import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrPricing.module.css';

const products = [
  { name: '단품 (1박스)', qty: '약과 6개입', price: '12,000', tag: null },
  { name: '2박스 세트', qty: '약과 12개입', price: '22,000', tag: '베스트' },
  { name: '사방신 에디션', qty: '4가지 맛 각 3개', price: '32,000', tag: '추천' },
];

function PricingCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${product.tag === '추천' ? styles.featured : ''}`}
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
      <div className={styles.productIcon}>🍪</div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.productQty}>{product.qty}</div>
      <div className={styles.price}>{product.price}<span>원</span></div>

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
            구매하기
          </motion.a>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function KrPricing() {
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
          <span className={styles.label}>PRICING</span>
          <h2 className={styles.title}>부담 없이 즐기는 달콤함</h2>
          <p className={styles.sub}>카드에 마우스를 올려보세요</p>
        </motion.div>

        <div className={styles.cards}>
          {products.map((p, i) => (
            <PricingCard key={i} product={p} index={i} />
          ))}
        </div>
      </div>
      <img src="/logo-h.png" alt="" className={styles.bgLogo} aria-hidden="true" />
    </section>
  );
}
