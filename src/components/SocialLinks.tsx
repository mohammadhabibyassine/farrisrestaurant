import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <section className={`section stagger-children ${styles.section}`}>
      <h2 className="section-title">تابعنا</h2>

      <a
        href="https://www.instagram.com/farris_restaurant"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card glass-card--instagram animate-fade-in-up"
        aria-label="حساب الانستقرام"
      >
        <div className="card-icon card-icon--instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </div>
        <div className="card-content">
          <span className="card-label">حساب الانستقرام</span>
        </div>
        <span className="card-arrow">‹</span>
      </a>

      <a
        href="https://www.tiktok.com/@farris_restaurant"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card glass-card--tiktok animate-fade-in-up"
        aria-label="حساب تيك توك"
      >
        <div className="card-icon card-icon--tiktok">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.3 8.3 0 0 0 4.76 1.49V7.1a4.85 4.85 0 0 1-1-.41z" />
          </svg>
        </div>
        <div className="card-content">
          <span className="card-label">حساب تيك توك</span>
        </div>
        <span className="card-arrow">‹</span>
      </a>
    </section>
  );
}
