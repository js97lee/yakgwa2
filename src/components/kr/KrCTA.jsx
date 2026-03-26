import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrCTA.module.css';

export default function KrCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="cta" className={styles.section}>
      {/* 배경 영상 */}
      <video
        className={styles.bgVideo}
        src="/cta-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.bgOverlay} />

      <div className={styles.inner} ref={ref}>
        <motion.div
          className={styles.decoText}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          약과
        </motion.div>

        <img src="/icon-palace.png" alt="" className="sectionIconWhite" />
        <motion.span
          className={styles.label}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          JONGNO YAKGWA · 종로약과
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          오늘, 가볍게<br />
          <span className={styles.accent}>즐겨보세요</span>
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="#" className={styles.ctaBtn}>
            <motion.span
              animate={{ boxShadow: ['0 0 0 0 rgba(212,168,83,0.4)', '0 0 0 16px rgba(212,168,83,0)', '0 0 0 0 rgba(212,168,83,0)'] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              style={{ display: 'inline-block', borderRadius: '50px' }}
            >
            </motion.span>
            오늘, 가볍게 즐겨보세요 →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
