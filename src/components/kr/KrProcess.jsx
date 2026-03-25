import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrProcess.module.css';

const steps = [
  {
    step: '01',
    icon: '🫘',
    title: '콩',
    desc: '국산 대두를 엄선해\n두유로 만드는 과정에서',
  },
  {
    step: '02',
    icon: '✨',
    title: '콩 추출',
    desc: '버려지던 콩를\n귀한 식재료로 업사이클',
    highlight: true,
  },
  {
    step: '03',
    icon: '🌾',
    title: '저당 배합',
    desc: '알룰로스와 건강한 재료를\n정성스럽게 배합',
  },
  {
    step: '04',
    icon: '🍪',
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
        <div className={styles.stepIcon}>{step.icon}</div>
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
