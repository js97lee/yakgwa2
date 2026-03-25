import styles from './MarqueeBanner.module.css';

const ITEMS = Array(10).fill(null);

export default function MarqueeBanner({ bg = '#1A0A02' }) {
  return (
    <div className={styles.banner} style={{ background: bg }}>
      <div className={styles.track}>
        {/* 두 세트 반복으로 끊김 없는 루프 */}
        {[0, 1].map(set => (
          <div key={set} className={styles.set} aria-hidden={set === 1}>
            {ITEMS.map((_, i) => (
              <span key={i} className={styles.item}>
                <img src="/logo-h.png" alt="종로약과" className={styles.logo} />
                <span className={styles.dot}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
