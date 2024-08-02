// pages/candidates.js
import { useState } from 'react';
import styles from './candidates.module.css';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (event) => {
    event.preventDefault();
    // Capture form data
    const newCandidate = {
      code: event.target.elements.code.value,
      name: event.target.elements.name.value,
      team: event.target.elements.team.value,
      section: event.target.elements.section.value,
      class: event.target.elements.class.value,
    };
    // Update state
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addCandidate}>
        <div className={styles.formGroup}>
          <label htmlFor="code">Code</label>
          <input id="code" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="team">Team</label>
          <input id="team" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="section">Section</label>
          <input id="section" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="class">Class</label>
          <input id="class" type="text" className={styles.inputField} required />
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
