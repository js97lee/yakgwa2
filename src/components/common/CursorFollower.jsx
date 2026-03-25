import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CursorFollower.module.css';

export default function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      style={{ x: springX, y: springY }}
    >
      <img src="/matcha.png" alt="" className={styles.img} />
    </motion.div>
  );
}
