import Head from "next/head";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import styles from "../styles/Signup.module.css"; // Adjust if necessary

export default function Signup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      
      <Navbar showSignup={true} showProfile={false} /> {/* Show Sign Up only */}

      <main className={styles.main}>
        <h1>Sign Up</h1>
        <form className={styles.form}>
          <label className={styles.label}>
            Name:
            <input type="text" name="name" required />
          </label>
          <label className={styles.label}>
            Email:
            <input type="email" name="email" required />
          </label>
          <label className={styles.label}>
            Password:
            <input type="password" name="password" required />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </main>

      <Footer /> {/* Use the Footer component here */}
    </div>
  );
}
