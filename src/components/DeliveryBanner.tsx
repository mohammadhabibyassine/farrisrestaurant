import styles from './DeliveryBanner.module.css';

export default function DeliveryBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.iconWrapper}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>خدمة التوصيل مجاناً</h3>
        <p className={styles.subtitle}>توصيل لجميع مناطق الكويت</p>
      </div>
      <div className={styles.location}>
        <p>جمعية الصليبية التعاونية - قطعة ٨ - فرع ٨</p>
      </div>
    </section>
  );
}
