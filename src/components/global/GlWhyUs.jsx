import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlWhyUs.module.css';

const cards = [
  {
    icon: '🌱',
    title: 'Vegan',
    items: ['100% plant-based', 'dairy-free', 'egg-free'],
    color: '#5C8A5C',
  },
  {
    icon: '💚',
    title: 'Diet-Friendly',
    items: ['low sugar', 'light calories', 'high fiber'],
    color: '#7DAA7D',
  },
  {
    icon: '♻️',
    title: 'Sustainable',
    items: ['upcycled soy pulp', 'zero-waste mindset', 'eco packaging'],
    color: '#4A7A6A',
  },
];

function Card({ card, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.04, y: -6 }}
    >
      <div className={styles.cardIcon} style={{ color: card.color }}>{card.icon}</div>
      <div className={styles.cardTitle} style={{ color: card.color }}>{card.title}</div>
      <ul className={styles.cardList}>
        {card.items.map(item => (
          <li key={item} className={styles.cardItem}>
            <span className={styles.dot} style={{ background: card.color }} />
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.cardLine} style={{ background: card.color }} />
    </motion.div>
  );
}

export default function GlWhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>CORE VALUE</span>
          <h2 className={styles.title}>
            Better for your body,<br />
            <span className={styles.accent}>better for the planet</span>
          </h2>
        </motion.div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Card key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
