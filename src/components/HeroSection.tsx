import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      {/* 24-hour service badge */}
      <div className={styles.serviceBadge}>
        <span className={styles.serviceBadgeIcon}>🕐</span>
        <span>نخدمكم ٢٤ ساعة</span>
      </div>

      <h2 className={styles.subtitleAr}>شباتي راشد</h2>
      <h1 className={styles.titleAr}>مطعم فارس</h1>

      {/* New tagline below name */}
      <p className={styles.flavorText}>الذ انواع الطبخ والذ الوجبات</p>

      <div className={styles.divider}>
        <span className={styles.dividerDot} />
        <span className={styles.dividerLine} />
        <span className={styles.dividerDot} />
      </div>
      <p className={styles.titleEn}>FARRIS RESTAURANT</p>
      <p className={styles.tagline}>المذاق  على أصوله</p>
      <div className={styles.badge}>
        <span>نكهة لا تقاوم</span>
      </div>
    </div>
  );
}
