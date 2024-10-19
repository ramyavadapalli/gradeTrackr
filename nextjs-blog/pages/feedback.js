// _app.js
import '../styles/global.css'; // Already imported global styles
import '../styles/feedback.css'; // Import feedback styles here
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>GradeTrackr</title>
      </Head>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            GradeTrackr
          </Link>
          {(router.pathname === '/about' || router.pathname === '/signup') && (
            <Link href="/profile" className={styles.profileTab}>Profile</Link>
          )}
        </nav>
      </header>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
