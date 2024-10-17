
// components/Footer.js
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Adjust the path if necessary
import { FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left side: Social media icons */}
      <div className={styles.leftSection}>
        <h2 className={styles.logo}>GRADETRACKR</h2>
        <div className={styles.socialIcons}>
          <Link href="https://www.youtube.com" aria-label="YouTube">
            <FaYoutube />
          </Link>
          <Link href="https://www.twitter.com" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </div>
      </div>

      {/* Right side: Columns */}
      <div className={styles.rightSection}>
        {/* Account Column */}
        <div className={styles.column}>
          <h3 className={styles.columnHeader}>Account</h3>
          <Link href="/signup" className={styles.link}>Sign-up</Link>
          <Link href="/login" className={styles.link}>Log In</Link>
          <Link href="/help" className={styles.link}>Help</Link>
        </div>

        {/* Product Column */}
        <div className={styles.column}>
          <h3 className={styles.columnHeader}>Product</h3>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="/feedback" className={styles.link}>Feedback</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>
        </div>

        {/* Company Column */}
        <div className={styles.column}>
          <h3 className={styles.columnHeader}>Company</h3>
          <Link href="/contact" className={styles.link}>Contact us</Link>
          <Link href="/our-story" className={styles.link}>Our story</Link>
          <Link href="/privacy" className={styles.link}>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;