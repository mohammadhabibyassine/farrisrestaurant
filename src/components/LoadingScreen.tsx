'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate a minimum loading time for the splash screen effect
    const timer = setTimeout(() => {
      setIsFading(true);
      // Remove from DOM after fade animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
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
