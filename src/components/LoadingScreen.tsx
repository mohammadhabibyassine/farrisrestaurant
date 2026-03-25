'use client';

import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIsFading(true);
    }, 500);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <h1 className={styles.titleAr}>مطعم فارس</h1>
        <p className={styles.titleEn}>FARRIS RESTAURANT</p>
        
        <div className={styles.loaderContainer}>
          <div className={styles.loaderBar} />
          <span className={styles.loaderText}>جاري التحميل...</span>
        </div>
      </div>
    </div>
  );
}
