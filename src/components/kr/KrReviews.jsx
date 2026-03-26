import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrReviews.module.css';

const reviews = [
  {
    avatar: '👩‍💼',
    name: '다이어터 지은님',
    handle: '@jieum_diet',
    text: '다이어트 중에도 먹었어요! 달콤한데 생각보다 가벼워서 깜짝 놀랐어요. 죄책감 없이 먹는 간식이 드디어 생겼어요 🙌',
    stars: 5,
    tag: '다이어트 중',
  },
  {
    avatar: '🧘‍♀️',
    name: '요가인 수빈님',
    handle: '@subin_wellness',
    text: '식물성이라 속이 편하고, 달달한 게 당기는 운동 후에 딱이에요. 알룰로스라서 혈당 걱정도 없어요!',
    stars: 5,
    tag: '건강식',
  },
  {
    avatar: '👩',
    name: '직장인 민주님',
    handle: '@minjoo_daily',
    text: '카페 디저트 대신 요걸로 바꿨어요. 회사 간식으로 가져갔더니 동료들한테도 대인기 🤩',
    stars: 5,
    tag: '오피스 간식',
  },
  {
    avatar: '🏃‍♀️',
    name: '런너 혜진님',
    handle: '@run_hyejin',
    text: '저당이라 믿기지 않는 달콤함. 전통 약과를 이렇게 현대적으로 재해석하다니... 완전 팬됨!',
    stars: 5,
    tag: '저당 간식',
  },
  {
    avatar: '✨',
    name: '인플루언서 나연님',
    handle: '@na_yeon_life',
    text: '패키지도 너무 예쁘고, 사방신 컨셉이 독특해요. SNS에 올렸더니 반응 폭발했어요 💥',
    stars: 5,
    tag: '패키지 굿',
  },
];

export default function KrReviews() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const doubled = [...reviews, ...reviews];

  useEffect(() => {
    let raf;
    let start = null;
    const speed = 0.1;

    const animate = (ts) => {
      if (!start) start = ts;
      const newOffset = ((ts - start) * speed) % (reviews.length * 340);
      setOffset(newOffset);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.section}>
      <motion.div
        ref={headerRef}
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <img src="/icon-palace.png" alt="" className="sectionIcon" />
        <span className={styles.label}>REVIEWS</span>
        <h2 className={styles.title}>리얼 후기</h2>
      </motion.div>

      <div className={styles.trackWrap}>
        <div className={styles.fadeLeft} />
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {doubled.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.avatar}>{r.avatar}</span>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.handle}>{r.handle}</div>
                </div>
                <span className={styles.tag}>{r.tag}</span>
              </div>
              <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
              <p className={styles.text}>{r.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}
