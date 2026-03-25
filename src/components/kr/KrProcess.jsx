import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrProcess.module.css';

const IconBean = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <ellipse cx="18" cy="18" rx="10" ry="13" stroke="#C8964E" strokeWidth="1.8" fill="none"/>
    <path d="M10 15c4 1.5 7 4 10 3s6-3.5 6-3.5" stroke="#C8964E" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 20c4 1.5 7 3 10 2s6-2.5 6-2.5" stroke="#C8964E" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconExtract = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 6v8M18 22v8" stroke="#C8964E" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 14l5.5 4-5.5 4" stroke="#C8964E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 14l-5.5 4 5.5 4" stroke="#C8964E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="18" r="3.5" stroke="#C8964E" strokeWidth="1.6" fill="none"/>
  </svg>
);

const IconMix = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M12 8h12l2 16H10L12 8Z" stroke="#C8964E" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <path d="M15 14c1 2 5 2 6 0" stroke="#C8964E" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14 19c1.5 2.5 6.5 2.5 8 0" stroke="#C8964E" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="18" y1="4" x2="18" y2="8" stroke="#C8964E" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconYakgwa = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="#C8964E" strokeWidth="1.8" fill="none"/>
    <circle cx="18" cy="18" r="7" stroke="#C8964E" strokeWidth="1.4" fill="none"/>
    <circle cx="18" cy="18" r="2.5" fill="#C8964E"/>
    <line x1="18" y1="5" x2="18" y2="11" stroke="#C8964E" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="18" y1="25" x2="18" y2="31" stroke="#C8964E" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="5" y1="18" x2="11" y2="18" stroke="#C8964E" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="25" y1="18" x2="31" y2="18" stroke="#C8964E" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const steps = [
  {
    step: '01',
    Icon: IconBean,
    title: '콩',
    desc: '국산 대두를 엄선해\n두유로 만드는 과정에서',
  },
  {
    step: '02',
    Icon: IconExtract,
    title: '콩 추출',
    desc: '버려지던 콩을\n귀한 식재료로 업사이클',
    highlight: true,
  },
  {
    step: '03',
    Icon: IconMix,
    title: '저당 배합',
    desc: '알룰로스와 건강한 재료를\n정성스럽게 배합',
  },
  {
    step: '04',
    Icon: IconYakgwa,
    title: '약과 완성',
    desc: '전통 방식으로 빚은\n건강한 저당 약과',
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
        <div className={styles.stepIcon}><step.Icon /></div>
        <div className={styles.stepTitle}>{step.title}</div>
        <div className={styles.stepDesc}>{step.desc}</div>
      </div>
    </motion.div>
  );
}

export default function KrProcess() {
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
          <h2 className={styles.title}>건강한 재료로 만든 간식</h2>
          <p className={styles.sub}>
            두유를 만들고 남은 콩, 버리지 않고 약과로 다시 태어났습니다
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
