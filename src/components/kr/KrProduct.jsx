import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './KrProduct.module.css';

const products = [
  {
    id: 'cheongryong',
    name: '청룡',
    flavor: '오리지널',
    keyword: '가벼움',
    color: '#C07830',
    img: '/original.png',
    desc: '고소하고 진한 전통 약과의 맛\n부담 없이 즐기는 클래식 간식',
    tags: ['저당', '클래식', '가벼운 칼로리'],
  },
  {
    id: 'baekho',
    name: '백호',
    flavor: '흑임자',
    keyword: '에너지',
    color: '#5A3A2A',
    img: '/blacksesame.png',
    desc: '고소한 흑임자가 가득\n깊고 풍부한 풍미의 든든한 간식',
    tags: ['흑임자', '고단백', '포만감'],
  },
  {
    id: 'jujak',
    name: '주작',
    flavor: '소금카라멜',
    keyword: '달콤',
    color: '#B8742A',
    img: '/injeolmi.png',
    desc: '달콤하고 짭조름한 소금카라멜\n중독성 있는 그 맛의 선택',
    tags: ['소금카라멜', '달콤짭조름', '저당'],
  },
  {
    id: 'hyeonmu',
    name: '현무',
    flavor: '말차',
    keyword: '밸런스',
    color: '#4A7040',
    img: '/matcha.png',
    desc: '깊고 은은한 말차의 쌉싸름함\n균형잡힌 맛의 완성',
    tags: ['말차', '밸런스', '식물성'],
  },
];

function ProductCard({ product, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className={styles.imgWrap}>
        <img src={product.img} alt={`${product.flavor} 약과`} className={styles.img} />
      </div>

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.names}>
            <span className={styles.flavor}>{product.flavor}</span>
            <span className={styles.nameKo} style={{ color: product.color }}>{product.name}</span>
          </div>
          <span className={styles.keyword} style={{ color: product.color, borderColor: `${product.color}40` }}>
            {product.keyword}
          </span>
        </div>

        <div className={styles.detail}>
          <p className={styles.desc}>{product.desc}</p>
          <div className={styles.tags}>
            {product.tags.map(t => (
              <span key={t} className={styles.tag} style={{ color: product.color, borderColor: `${product.color}35` }}>
                {t}
              </span>
            ))}
          </div>
          <a href="#pricing" className={styles.buyBtn} style={{ background: product.color }}>
            구매하기
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function KrProduct() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.label}>PRODUCT LINE</span>
          <h2 className={styles.title}>
            네 가지 맛,<br />
            <span className={styles.accent}>네 가지 선택</span>
          </h2>
          <p className={styles.sub}>사방신 에디션 · 각각의 개성을 담은 약과</p>
        </motion.div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
