// components/Footer.js
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/about" className={styles.link}>About</Link>
      {/* Removed Profile link from the footer */}
    </footer>
  );
};

export default Footer;
