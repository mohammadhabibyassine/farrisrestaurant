import styles from './LocationButton.module.css';

export default function LocationButton() {
  return (
    <section className={`section stagger-children ${styles.section}`}>
      <h2 className="section-title">موقعنا</h2>

      <a
        href="https://maps.app.goo.gl/iqE858ivVYB26DmK9?g_st=iw"
        target="_blank"
        rel="noopener noreferrer"
        className={`glass-card ${styles.locationCard} animate-fade-in-up`}
        aria-label="موقعنا على خرائط جوجل"
      >
        <div className={styles.mapIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className={styles.mapPulse} />
        </div>
        <div className="card-content">
          <span className="card-label">موقعنا على الخريطة</span>
          <span className={styles.mapSub}>افتح في خرائط جوجل</span>
        </div>
        <span className="card-arrow">‹</span>
      </a>
    </section>
  );
}
