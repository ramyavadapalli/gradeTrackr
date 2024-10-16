import Head from "next/head";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import styles from "../styles/Profile.module.css"; // Adjust if necessary

export default function Profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
      </Head>
      
      <Navbar showSignup={false} showProfile={false} /> {/* No links */}

      <main className={styles.main}>
        <h1>Your Profile add stuff here</h1>
        {/* Add profile content here */}
      </main>

      <Footer /> {/* Use the Footer component here */}
    </div>
  );
}
