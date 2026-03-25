import styles from './DeliveryBanner.module.css';

export default function DeliveryBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.iconWrapper}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="17" r="3" />
          <circle cx="18" cy="17" r="3" />
          <path d="M6 17l4-8h4l4 8" />
          <path d="M10 9l2 8" />
          <path d="M9 12h6" />
          <path d="M14 9h3" />
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>توصيل مجاني</h3>
      </div>
      <div className={styles.location}>
        <p>جمعية الصليبية التعاونية - قطعة ٨ - فرع ٨</p>
      </div>
    </section>
  );
}
