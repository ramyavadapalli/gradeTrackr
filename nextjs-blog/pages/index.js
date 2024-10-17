import Head from "next/head";
import Link from "next/link"; // Ensure Link is imported
import styles from "../styles/Home.module.css"; // Adjust path if necessary
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GradeTrackr</title>
      </Head>

      <Navbar showSignup={true} showProfile={false} /> {/* Show Sign Up only */}

      <main className={styles.main}>
        <img src="/homepagePic.png" alt="Background" className={styles.backgroundImage} />
        <h1 className={styles.title}>Track smarter,<br /> achieve higher</h1>
        <p className={styles.subtitle}>
          Your all-in-one tool for monitoring <br />
          grades and achieving academic <br />
          success. All for free.
        </p>
        {/* Join Now link */}
        <Link href="/signup" className={styles.joinNow}>
          Join Now
        </Link>
      </main>
    </div>
  );
}

