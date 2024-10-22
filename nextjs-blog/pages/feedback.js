// pages/feedback.js
import { useState } from 'react';
import styles from '../styles/feedback.module.css'; // Import feedback-specific CSS

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFeedback('');
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>We value your feedback!</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Let us know what you think..."
            className={styles.textarea}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      ) : (
        <p className={styles.thankYouMessage}>
          Thank you for your feedback!
        </p>
      )}
    </div>
  );
}
