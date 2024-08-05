import { useState } from 'react';
import styles from '../styles/results.module.css'; // Import the CSS module

const Results = () => {
  const [programCode, setProgramCode] = useState('');
  const [programName, setProgramName] = useState('');
  const [section, setSection] = useState('');
  const [position, setPosition] = useState('');
  const [chestNo, setChestNo] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [grade, setGrade] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.heading}>Enter Results</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="programCode">Program Code:</label>
          <input
            type="text"
            id="programCode"
            className={styles.input}
            value={programCode}
            onChange={(e) => setProgramCode(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="programName">Program Name:</label>
          <input
            type="text"
            id="programName"
            className={styles.input}
            value={programName}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            className={styles.input}
            value={section}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="position">Position:</label>
          <select
            id="position"
            className={styles.select}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select Position</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="chestNo">Chest No:</label>
          <input
            type="text"
            id="chestNo"
            className={styles.input}
            value={chestNo}
            onChange={(e) => setChestNo(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="candidateName">Candidate Name:</label>
          <input
            type="text"
            id="candidateName"
            className={styles.input}
            value={candidateName}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="teamCode">Team Code:</label>
          <input
            type="text"
            id="teamCode"
            className={styles.input}
            value={teamCode}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="grade">Grade:</label>
          <select
            id="grade"
            className={styles.select}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Results;
