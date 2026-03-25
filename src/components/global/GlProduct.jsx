import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlProduct.module.css';

const products = [
  {
    id: 'blue',
    korean: '청룡',
    name: 'Blue Dragon',
    flavor: 'Original',
    keyword: 'Lightness',
    color: '#C07830',
    img: '/original.png',
    desc: 'Classic honey yakgwa\nLight & refreshingly clean',
    tags: ['Low Sugar', 'Classic', 'Light'],
  },
  {
    id: 'white',
    korean: '백호',
    name: 'White Tiger',
    flavor: 'Black Sesame',
    keyword: 'Energy',
    color: '#5A3A2A',
    img: '/blacksesame.png',
    desc: 'Rich black sesame depth\nBold & energizing every bite',
    tags: ['Black Sesame', 'High Fiber', 'Rich'],
  },
  {
    id: 'red',
    korean: '주작',
    name: 'Vermilion Bird',
    flavor: 'Injeolmi',
    keyword: 'Sweetness',
    color: '#B8742A',
    img: '/injeolmi.png',
    desc: 'Soft injeolmi rice cake sweetness\nIndulge without compromise',
    tags: ['Injeolmi', 'Sweet', 'Low Sugar'],
  },
  {
    id: 'black',
    korean: '현무',
    name: 'Black Tortoise',
    flavor: 'Matcha',
    keyword: 'Balance',
    color: '#4A7040',
    img: '/matcha.png',
    desc: 'Earthy matcha & bittersweet notes\nPerfect harmony in every bite',
    tags: ['Matcha', 'Balanced', 'Plant-based'],
  },
];

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className={styles.imgWrap}>
        <motion.img
          src={product.img}
          alt={`${product.flavor} Yakgwa`}
          className={styles.img}
          animate={hovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.names}>
            <span className={styles.flavor}>{product.flavor}</span>
            <span className={styles.nameEn} style={{ color: product.color }}>{product.name}</span>
            <span className={styles.nameKo}>{product.korean}</span>
          </div>
          <span className={styles.keyword} style={{ color: product.color, borderColor: `${product.color}40` }}>
            {product.keyword}
          </span>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              className={styles.detail}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
            >
              <p className={styles.desc}>{product.desc}</p>
              <div className={styles.tags}>
                {product.tags.map(t => (
                  <span key={t} className={styles.tag} style={{ color: product.color, borderColor: `${product.color}35` }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function GlProduct() {
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
          <span className={styles.label}>PRODUCT LINE</span>
          <h2 className={styles.title}>
            Four flavors.<br />
            <span className={styles.accent}>Four energies.</span>
          </h2>
          <p className={styles.sub}>Inspired by the Four Guardians of Korean mythology</p>
        </motion.div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
