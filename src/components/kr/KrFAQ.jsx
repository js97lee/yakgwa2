import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrFAQ.module.css';

const faqs = [
  { q: '진짜 저당인가요? 얼마나 낮아요?', a: '알룰로스를 주 감미료로 사용해 일반 약과 대비 당류를 약 70% 줄였습니다. 한 개당 당류 3g 이하로 설계되어 있어요.' },
  { q: '100% 식물성인가요?', a: '네! 달걀, 유제품 등 동물성 원료를 전혀 사용하지 않습니다. 완전 비건 인증을 준비 중이에요.' },
  { q: '콩가 들어간 건 어떤 맛이에요?', a: '콩 특유의 고소한 맛이 은은하게 나면서, 오히려 더 깊고 풍성한 맛을 냅니다. 콩 알레르기가 있으신 분들은 주의해 주세요.' },
  { q: '배송은 얼마나 걸려요?', a: '주문 후 1-2 영업일 내 출고됩니다. 냉장 배송으로 신선하게 받아보실 수 있어요.' },
  { q: '유통기한은 어떻게 되나요?', a: '냉장 보관 기준 제조일로부터 14일입니다. 실온에서는 7일 이내에 드시는 걸 권장해요.' },
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
        <span className={styles.qMark}>Q</span>
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
              <span className={styles.aMark}>A</span>
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function KrFAQ() {
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
          <img src="/icon-palace.png" alt="" className="sectionIcon" />
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.title}>자주 묻는 질문</h2>
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
