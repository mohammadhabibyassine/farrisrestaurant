import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.glowRing} />
      <div className={styles.logoWrapper}>
        <Image
          src="/logo.png"
          alt="Farris Restaurant Logo"
          width={120}
          height={120}
          priority
          className={styles.logoImage}
        />
      </div>
    </div>
  );
}
