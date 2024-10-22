// components/GradeTrackr.js
import { useState } from 'react';
import styles from '../styles/gradetrackr.module.css'; // Correct CSS import

export default function GradeTrackr() {
  const [numSemesters, setNumSemesters] = useState('');
  const [semesterData, setSemesterData] = useState([]);
  const [step, setStep] = useState(1);
  const [overallGPA, setOverallGPA] = useState(null);

  const handleSemesterChange = (index, field, value) => {
    const updatedData = [...semesterData];
    updatedData[index] = { ...updatedData[index], [field]: parseFloat(value) };
    setSemesterData(updatedData);
  };

  const calculateGPA = () => {
    let totalQualityPoints = 0;
    let totalHours = 0;

    semesterData.forEach(({ hours, gpa }) => {
      totalQualityPoints += hours * gpa;
      totalHours += hours;
    });

    const gpa = totalHours > 0 ? totalQualityPoints / totalHours : 0;
    setOverallGPA(gpa.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GradeTrackr - GPA Calculator</h1>

      {step === 1 && (
        <div className={styles.inputSection}>
          <label>How many semesters have you completed?</label>
          <input
            type="number"
            className={styles.inputField}
            value={numSemesters}
            onChange={(e) => setNumSemesters(e.target.value)}
            min="1"
            required
          />
          <button
            onClick={() => {
              setSemesterData(
                Array.from({ length: numSemesters }, () => ({
                  hours: 0,
                  gpa: 0,
                }))
              );
              setStep(2);
            }}
            className={styles.nextButton}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.inputSection}>
          <h2>Enter hours and GPA for each semester</h2>
          {semesterData.map((_, index) => (
            <div key={index} className={styles.semesterInput}>
              <label>Semester {index + 1}</label>
              <input
                type="number"
                className={styles.inputField}
                placeholder="Hours"
                min="0"
                onChange={(e) =>
                  handleSemesterChange(index, 'hours', e.target.value)
                }
                required
              />
              <input
                type="number"
                className={styles.inputField}
                step="0.01"
                placeholder="GPA"
                min="0"
                max="4.00"
                onChange={(e) =>
                  handleSemesterChange(index, 'gpa', e.target.value)
                }
                required
              />
            </div>
          ))}
          <button onClick={calculateGPA} className={styles.calculateButton}>
            Calculate GPA
          </button>
        </div>
      )}

      {overallGPA !== null && (
        <div className={styles.resultSection}>
          <h2>Your Overall GPA: {overallGPA}</h2>
        </div>
      )}
    </div>
  );
}
