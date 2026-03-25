import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './GlReviews.module.css';

const reviews = [
  {
    avatar: '🌿',
    name: 'Emma R.',
    handle: '@emma_plantbased',
    text: 'Finally a vegan Korean dessert! I\'ve been searching for plant-based K-snacks forever. This Yakgwa is incredible — clean ingredients, amazing taste.',
    stars: 5,
    location: 'New York, USA',
  },
  {
    avatar: '✨',
    name: 'Sophie L.',
    handle: '@sophieclean',
    text: 'Clean and delicious! The texture is perfect and it doesn\'t taste like a "healthy" version at all. Genuinely one of my favorite snacks now.',
    stars: 5,
    location: 'London, UK',
  },
  {
    avatar: '🌱',
    name: 'Mia K.',
    handle: '@mia_wellness',
    text: 'Love the sustainability angle — upcycled soy pulp is such a smart concept. Great for the planet and for my body. The Blue Dragon flavor is my fav!',
    stars: 5,
    location: 'Berlin, Germany',
  },
  {
    avatar: '🍃',
    name: 'Yuki T.',
    handle: '@yuki_vegan',
    text: 'As a vegan living in Japan, I\'ve always wanted to try traditional Korean sweets. This is perfect — vegan, low sugar, and authentically delicious.',
    stars: 5,
    location: 'Tokyo, Japan',
  },
  {
    avatar: '💚',
    name: 'Aria N.',
    handle: '@aria_eats',
    text: 'The packaging is beautiful and the Four Guardians concept is so unique. Makes the perfect gift for anyone into K-culture and wellness.',
    stars: 5,
    location: 'Sydney, AU',
  },
];

export default function GlReviews() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [offset, setOffset] = useState(0);
  const doubled = [...reviews, ...reviews];

  useEffect(() => {
    let raf;
    let start = null;
    const speed = 0.1;
    const animate = (ts) => {
      if (!start) start = ts;
      const newOffset = ((ts - start) * speed) % (reviews.length * 360);
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
        <span className={styles.label}>REVIEWS</span>
        <h2 className={styles.title}>What people are saying</h2>
      </motion.div>

      <div className={styles.trackWrap}>
        <div className={styles.fadeLeft} />
        <div
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
                <span className={styles.location}>{r.location}</span>
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
