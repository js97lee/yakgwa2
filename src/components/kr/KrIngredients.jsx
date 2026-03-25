import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrIngredients.module.css';

const steps = [
  { num: '01', emoji: '🫘', title: '콩', desc: '국산 대두를 엄선해\n두유로 만드는 과정에서' },
  { num: '02', emoji: '✨', title: '콩 추출', desc: '버려지던 콩을\n귀한 식재료로 업사이클' },
  { num: '03', emoji: '🌾', title: '저당 배합', desc: '알룰로스와 건강한 재료를\n정성스럽게 배합' },
  { num: '04', emoji: '🍪', title: '약과 완성', desc: '전통 방식으로 빚은\n건강한 저당 약과' },
];

export default function KrIngredients() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

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
          <span className={styles.label}>INGREDIENT STORY</span>
          <h2 className={styles.title}>건강한 재료로 만든 간식</h2>
          <p className={styles.sub}>두유를 만들고 남은 콩, 버리지 않고 약과로 다시 태어났습니다</p>
        </motion.div>

        {/* 타임라인 */}
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {/* 번호 + 연결선 */}
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{step.num}</span>
                {i < steps.length - 1 && (
                  <motion.div
                    className={styles.line}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    style={{ originX: 0 }}
                  />
                )}
              </div>

              {/* 아이콘 */}
              <div className={styles.stepEmoji}>{step.emoji}</div>

              {/* 텍스트 */}
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
