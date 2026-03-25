import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <p className={styles.brand}>مطعم فارس</p>
      <p className={styles.brandEn}>FARRIS RESTAURANT</p>
    </footer>
  );
}
