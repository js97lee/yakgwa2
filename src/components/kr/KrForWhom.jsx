import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrForWhom.module.css';


const personas = [
  { tag: '# 다이어터', line: '먹고 싶은데\n참아야 할까?' },
  { tag: '# 건강 관심층', line: '맛있으면서\n몸에도 좋은 간식' },
  { tag: '# 선물용', line: '특별한 날\n건강한 선물' },
];

function useTypewriter(text, speed = 48, active = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!active) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, active]);

  return { displayed, done };
}

function PersonaSlide({ persona, onDone }) {
  const { displayed, done } = useTypewriter(persona.line, 48, true);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onDone, 1400);
      return () => clearTimeout(t);
    }
  }, [done, onDone]);

  return (
    <div className={styles.slide}>
      <span className={styles.personaTag}>{persona.tag}</span>
      <p className={styles.personaLine}>
        {displayed.split('\n').map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
        {!done && <span className={styles.cursor}>|</span>}
      </p>
    </div>
  );
}

export default function KrForWhom() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [current, setCurrent] = useState(-1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (inView && current === -1) {
      const t = setTimeout(() => setCurrent(0), 400);
      return () => clearTimeout(t);
    }
  }, [inView, current]);

  const handleDone = () => {
    if (current < personas.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>FOR WHOM</span>
          <h2 className={styles.title}>
            오늘도 참을까, 먹을까<br />
            <span className={styles.accent}>고민했던 순간</span>
          </h2>
        </motion.div>

        {/* 2열: 타이핑 + 약과 이미지 */}
        <div className={styles.contentRow}>
          {/* 한 번에 하나씩 슬라이드 */}
          <div className={styles.stageWrap}>
          <AnimatePresence mode="wait">
            {current >= 0 && !finished && (
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <PersonaSlide persona={personas[current]} onDone={handleDone} />
              </motion.div>
            )}

            {finished && (
              <motion.div
                key="final"
                className={styles.finalWrap}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.divider} />
                <p className={styles.finalMsg}>이제는 참지 않아도 됩니다</p>
                <span className={styles.finalSub}>종로약과가 함께합니다 ✦</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 진행 도트 */}
          {current >= 0 && (
            <div className={styles.dots}>
              {personas.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.dot} ${(finished ? personas.length : current) > i ? styles.dotDone : current === i ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          )}
          </div>

          {/* 스피닝 약과 */}
          <motion.div
            className={styles.yakgwaCol}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src="/injeolmi.png"
              alt="종로약과 주작"
              className={styles.spinImg}
              whileHover={{ rotate: 360 }}
              transition={{ rotate: { duration: 0.7, ease: 'easeInOut' } }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
