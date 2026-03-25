import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrForWhom.module.css';

const cards = [
  {
    label: '다이어터',
    title: '먹고 싶은데\n참아야 할까?',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: '건강 관심층',
    title: '맛있으면서\n몸에도 좋은 간식',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: '선물용',
    title: '특별한 날\n건강한 선물',
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  },
];

function Card({ card, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <img src={card.img} alt={card.label} className={styles.cardImg} />
      <div className={styles.cardOverlay} />
      <div className={styles.cardText}>
        <span className={styles.cardLabel}>{card.label}</span>
        <p className={styles.cardTitle}>{card.title}</p>
      </div>
    </motion.div>
  );
}

export default function KrForWhom() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.label}>FOR WHOM</span>
          <h2 className={styles.title}>
            오늘도 참을까, 먹을까<br />
            <span className={styles.accent}>고민했던 순간</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => <Card key={i} card={card} index={i} />)}
        </div>
      </div>
    </section>
  );
}
