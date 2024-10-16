// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Adjust the path as needed

const Navbar = ({ showSignup, showProfile }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <img src="/gradetracker logo.png" alt="GradeTrackr Logo" className={styles.logoImage} />
          <span className={styles.logoText}>GradeTrackr</span>
        </Link>
        {showSignup && <Link href="/signup" className={styles.profileTab}>Sign Up</Link>}
        {showProfile && <Link href="/profile" className={styles.profileTab}>Profile</Link>}
      </nav>
    </header>
  );
};

export default Navbar;
