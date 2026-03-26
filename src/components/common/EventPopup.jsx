import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EventPopup.module.css';

export default function EventPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className={styles.popup}
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            {/* 닫기 */}
            <button className={styles.closeBtn} onClick={close} aria-label="닫기">✕</button>

            {/* 상단 콜라버 헤더 */}
            <div className={styles.header}>
              <div className={styles.logoRow}>
                <img src="/logo-h.png" alt="종로약과" className={styles.brandLogo} />
                <span className={styles.x}>×</span>
                <img src="/kxizy-logo.png" alt="KXIZY" className={styles.kxizyLogo} />
              </div>
              <p className={styles.colabTag}>COLLABORATION</p>
            </div>

            {/* 콜라보 이미지 */}
            <div className={styles.imgArea}>
              <img src="/kxizy-photo.png" alt="KXIZY × 종로약과" className={styles.colabPhoto} />
              <img src="/logo-white.png" alt="종로약과" className={styles.imgLogo} />
            </div>

            {/* 이벤트 내용 */}
            <div className={styles.body}>
              <span className={styles.eventTag}>🎉 사전예약 이벤트</span>
              <h2 className={styles.title}>
                케이지도 선택한<br />
                <span className={styles.accent}>프로틴 저당 약과</span>
              </h2>
              <p className={styles.desc}>
                사방신 아이돌 KXIZY × 종로약과 콜라보<br />
                사전예약 시 <strong>10% 할인 + 굿즈 증정</strong>
              </p>
              <div className={styles.deadline}>
                <span className={styles.deadlineLabel}>⏰ 마감까지</span>
                <span className={styles.deadlineDate}>2026. 04. 30</span>
              </div>
            </div>

            {/* CTA */}
            <a href="#pricing" className={styles.ctaBtn} onClick={close}>
              지금 사전예약하기 →
            </a>

            <button className={styles.todayClose} onClick={close}>
              오늘 하루 보지 않기
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
