// pages/candidates.js
import { useState } from 'react';
import styles from './candidates.module.css';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (event) => {
    event.preventDefault();
    // Add candidate logic here
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addCandidate}>
        <div className={styles.formGroup}>
          <label>Code</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Team</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Section</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Class</label>
          <input type="text" className={styles.inputField} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Candidate</button>
      </form>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Team</th>
              <th>Section</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.code}</td>
                <td>{candidate.name}</td>
                <td>{candidate.team}</td>
                <td>{candidate.section}</td>
                <td>{candidate.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candidates;
