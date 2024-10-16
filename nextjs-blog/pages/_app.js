// _app.js
import '../styles/global.css'; // Adjust the path if necessary
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Adjust the path if necessary
import { AppProps } from 'next/app'; // Import AppProps
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Adjust the path if necessary
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
          {/* Show Profile link only on About and Signup pages */}
          {(router.pathname === '/about' || router.pathname === '/signup') && (
            <Link href="/profile" className={styles.profileTab}>Profile</Link>
          )}
        </nav>
      </header>

      <Component {...pageProps} />

      <Footer /> {/* Include the Footer Component without Profile link */}
    </>
  );
}

export default MyApp;
