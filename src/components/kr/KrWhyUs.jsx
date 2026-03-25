import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrWhyUs.module.css';

const IconLowSugar = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4C18 4 10 12 10 20a8 8 0 0 0 16 0C26 12 18 4 18 4Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <path d="M14 22c1 2 4 3 6 2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="22" y1="8" x2="28" y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="25" y1="12" x2="31" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconCalorie = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke={color} strokeWidth="1.8" fill="none"/>
    <path d="M18 10v8l5 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 6.5C14.5 5.5 16 5 18 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="18" cy="18" r="2" fill={color}/>
  </svg>
);

const IconPlant = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 30V16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M18 22c0 0-8-2-8-10 0 0 8 0 8 10Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <path d="M18 18c0 0 7-3 7-11 0 0-7 1-7 11Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <line x1="12" y1="30" x2="24" y2="30" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const icons = [IconLowSugar, IconCalorie, IconPlant];

const cards = [
  {
    title: '저당 설계',
    desc: '일반 디저트 대비 낮은 당류',
    detail: '알룰로스를 사용해 달콤함은 유지하면서 혈당 부담을 줄였어요',
    color: '#D4A853',
  },
  {
    title: '가벼운 칼로리',
    desc: '부담 없는 간식',
    detail: '콩의 풍부한 식이섬유로 포만감은 높이고 칼로리는 낮게',
    color: '#C8964E',
  },
  {
    title: '식물성 원료',
    desc: '속 편한 디저트',
    detail: '동물성 원료 없이 순수 식물성 재료로만 만든 착한 간식',
    color: '#7BAF7B',
  },
];

function Card({ card, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = icons[index];

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.04, y: -6 }}
    >
      <div className={styles.cardIcon}><Icon color={card.color} /></div>
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.cardDesc}>{card.desc}</div>
      <div className={styles.cardDetail}>{card.detail}</div>
      <div className={styles.cardLine} style={{ background: card.color }} />
    </motion.div>
  );
}

export default function KrWhyUs() {
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
            내 몸을 생각한,<br />
            <span className={styles.accent}>더 현명한 선택</span>
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
