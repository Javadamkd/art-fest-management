// pages/results.js
import { useState, useEffect } from 'react';
import styles from '../styles/results.module.css'; // Import the CSS module

const Results = () => {
  const [programCode, setProgramCode] = useState('');
  const [programName, setProgramName] = useState('');
  const [section, setSection] = useState('');
  const [position, setPosition] = useState('');
  const [chestNo, setChestNo] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [class_, setClass] = useState('');
  const [grade, setGrade] = useState('');

  // Fetch the program details when the program code changes
  useEffect(() => {
    if (programCode) {
      // Fetch program details from your data source
      const program = {}; // Replace with actual lookup
      setProgramName(program.name);
      setSection(program.section);
    }
  }, [programCode]);

  // Fetch the candidate details when the chest number changes
  useEffect(() => {
    if (chestNo) {
      // Fetch candidate details from your data source
      const candidate = {}; // Replace with actual lookup
      setCandidateName(candidate.name);
      setTeamCode(candidate.teamCode);
      setClass(candidate.class);
    }
  }, [chestNo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ programCode, programName, section, position, chestNo, candidateName, teamCode, class_, grade });
  };

  return (
    <div className={styles.container}>
      <h1>Results</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Program Code:</label>
          <input type="text" value={programCode} onChange={(e) => setProgramCode(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Program Name:</label>
          <input type="text" value={programName} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label>Section:</label>
          <input type="text" value={section} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label>Position:</label>
          <select value={position} onChange={(e) => setPosition(e.target.value)} required>
            <option value="">Select Position</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Chest No:</label>
          <input type="text" value={chestNo} onChange={(e) => setChestNo(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Candidate Name:</label>
          <input type="text" value={candidateName} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label>Team Code:</label>
          <input type="text" value={teamCode} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label>Class:</label>
          <input type="text" value={class_} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label>Grade:</label>
          <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Add Result</button>
      </form>
    </div>
  );
};

export default Results;
