// pages/faq.js
import { useState } from 'react';
import styles from '../styles/faq.module.css'; // Import FAQ-specific styles

const faqData = [
  {
    question: 'What is GradeTrackr?',
    answer: 'GradeTrackr is a web application that helps students track their academic progress across multiple semesters with real-time GPA calculations and predictions.',
  },
  {
    question: 'How do I sign up for GradeTrackr?',
    answer: 'Click on the "Sign Up" button on the homepage and fill out the registration form with your details.',
  },
  {
    question: 'Is my data safe with GradeTrackr?',
    answer: 'Yes, we take your privacy seriously and ensure that your data is securely stored and not shared with third parties.',
  },
  {
    question: 'How can I give feedback?',
    answer: 'You can provide feedback on the product by visiting the Feedback page through the link in the navbar.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions (FAQ)</h1>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </button>
            {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
