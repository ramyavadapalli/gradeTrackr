import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradeTrackr from "../components/GradeTrackr.js"; // Explicit import

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GradeTrackr</title>
      </Head>

      <Navbar showSignup={true} showProfile={false} />

      <main className={styles.main}>
        <img
          src="/homepagePic.png"
          alt="Background"
          className={styles.backgroundImage}
        />
        <h1 className={styles.title}>
          Track smarter,<br /> achieve higher
        </h1>
        <p className={styles.subtitle}>
          Your all-in-one tool for monitoring <br />
          grades and achieving academic <br />
          success. All for free.
        </p>

        <Link href="/signup" className={styles.joinNow}>
          Join Now
        </Link>

        <div className={styles.gradetrackrWrapper}>
          <h2 className={styles.gradetrackrTitle}>Calculate Your GPA</h2>
          <GradeTrackr />
        </div>
      </main>

      <Footer />
    </div>
  );
}
