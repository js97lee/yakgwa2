import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EntrySplit.module.css';

export default function EntrySplit({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles.container}>
      {/* Brand top */}
      <motion.div
        className={styles.brand}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className={styles.brandKo}>종로약과</span>
        <span className={styles.brandEn}>JONGNO YAKGWA</span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        What brings you here?
      </motion.p>

      {/* Split panels */}
      <div className={styles.panels}>
        {/* Korean Track */}
        <motion.button
          className={`${styles.panel} ${styles.panelKr}`}
          onClick={() => onSelect('kr')}
          onHoverStart={() => setHovered('kr')}
          onHoverEnd={() => setHovered(null)}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            flex: hovered === 'kr' ? 1.4 : hovered === 'global' ? 0.7 : 1,
            transition: 'flex 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className={styles.panelInner}>
            <div className={styles.panelDeco}>약과</div>
            <div className={styles.panelLabel}>다이어트 간식이<br/>필요해요!</div>
            <div className={styles.panelSub}>저당 · 고단백 · 식물성</div>
            <motion.div
              className={`${styles.panelBtn} ${styles.panelBtnKr}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              한국어로 보기 →
            </motion.div>
          </div>
          <div className={styles.panelBg} data-side="kr" />
        </motion.button>

        {/* Divider */}
        <motion.div
          className={styles.divider}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <span className={styles.dividerOr}>or</span>
        </motion.div>

        {/* Global Track */}
        <motion.button
          className={`${styles.panel} ${styles.panelGl}`}
          onClick={() => onSelect('global')}
          onHoverStart={() => setHovered('global')}
          onHoverEnd={() => setHovered(null)}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            flex: hovered === 'global' ? 1.4 : hovered === 'kr' ? 0.7 : 1,
            transition: 'flex 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className={styles.panelInner}>
            <div className={styles.panelDeco}>Yakgwa</div>
            <div className={styles.panelLabel}>I'm looking for<br/>plant-based dessert</div>
            <div className={styles.panelSub}>Vegan · Low Sugar · Sustainable</div>
            <motion.div
              className={`${styles.panelBtn} ${styles.panelBtnGl}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Global →
            </motion.div>
          </div>
          <div className={styles.panelBg} data-side="global" />
        </motion.button>
      </div>

      {/* Bottom note */}
      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        종로약과 약과 · 콩로 만든 저당 식물성 디저트
      </motion.p>
    </div>
  );
}
