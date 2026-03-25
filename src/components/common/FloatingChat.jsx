import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FloatingChat.module.css';

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            {/* 헤더 */}
            <div className={styles.panelHeader}>
              <div className={styles.brandRow}>
                <img src="/logo-h.png" alt="종로약과" className={styles.panelLogo} />
              </div>
              <p className={styles.panelSub}>무엇이든 물어보세요 😊</p>
            </div>

            {/* 채널 목록 */}
            <div className={styles.channels}>
              <a
                href="http://pf.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.channel} ${styles.kakao}`}
              >
                <span className={styles.channelIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <ellipse cx="10" cy="9" rx="8.5" ry="7.5" fill="#3A1D00"/>
                    <path d="M6 9.5c.5-2 4.5-2.5 6-1s.5 3.5-1 4c-.3.1-.5.3-.4.6l.3 1.2c.1.2-.1.4-.3.3L9 13.5c-.2-.1-.3-.3-.2-.5.1-.4.2-.8-.3-1C7 11.5 5.5 11.5 6 9.5Z" fill="#FFE000"/>
                  </svg>
                </span>
                <div className={styles.channelText}>
                  <span className={styles.channelName}>카카오톡 문의</span>
                  <span className={styles.channelDesc}>평일 10:00 – 18:00</span>
                </div>
                <svg className={styles.arrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.channel} ${styles.insta}`}
              >
                <span className={styles.channelIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="5" fill="url(#ig)"/>
                    <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
                    <circle cx="14.5" cy="5.5" r="1" fill="white"/>
                    <defs>
                      <linearGradient id="ig" x1="2" y1="18" x2="18" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9A825"/>
                        <stop offset="0.5" stopColor="#E91E63"/>
                        <stop offset="1" stopColor="#9C27B0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className={styles.channelText}>
                  <span className={styles.channelName}>인스타그램 DM</span>
                  <span className={styles.channelDesc}>@jongno_yakgwa</span>
                </div>
                <svg className={styles.arrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="mailto:hello@jongnoyakgwa.com"
                className={`${styles.channel} ${styles.email}`}
              >
                <span className={styles.channelIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="2" fill="#C8964E"/>
                    <path d="M2 6l8 5 8-5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </span>
                <div className={styles.channelText}>
                  <span className={styles.channelName}>이메일 문의</span>
                  <span className={styles.channelDesc}>hello@jongnoyakgwa.com</span>
                </div>
                <svg className={styles.arrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <p className={styles.notice}>주문·배송·제품 관련 무엇이든 편하게 문의해 주세요.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB 버튼 */}
      <motion.button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="채팅 문의"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              width="22" height="22" viewBox="0 0 22 22" fill="none"
            >
              <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              width="22" height="22" viewBox="0 0 22 22" fill="none"
            >
              <path d="M4 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round" fill="none"/>
              <circle cx="8" cy="10" r="1.2" fill="white"/>
              <circle cx="11" cy="10" r="1.2" fill="white"/>
              <circle cx="14" cy="10" r="1.2" fill="white"/>
            </motion.svg>
          )}
        </AnimatePresence>
        {!open && <span className={styles.fabLabel}>문의하기</span>}
      </motion.button>
    </div>
  );
}
