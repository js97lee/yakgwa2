import styles from './PatternBand.module.css';

export default function PatternBand({ height = 90 }) {
  return (
    <div className={styles.band} style={{ height }} />
  );
}
