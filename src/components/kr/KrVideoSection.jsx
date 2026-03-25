import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrVideoSection.module.css';

export default function KrVideoSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* 비디오 래퍼 */}
      <div className={styles.videoWrap}>
        <motion.video
          className={styles.video}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ scale }}
        />
        <div className={styles.overlay} />

        {/* 텍스트 오버레이 */}
        <motion.div
          ref={ref}
          className={styles.textBox}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <span className={styles.label}>BRAND FILM</span>
          <p className={styles.copy}>
            달콤함은 그대로,<br />부담은 가볍게.
          </p>
          <div className={styles.kxizyBadge}>
            <img src="/kxizy-icon.png" alt="KXIZY" className={styles.kxizyIcon} />
            <div className={styles.kxizyText}>
              <img src="/kxizy-logo.png" alt="KXIZY" className={styles.kxizyLogo} />
              <span className={styles.kxizyDesc}>사방신 아이돌 케이지도 선택한 건강한 맛!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
