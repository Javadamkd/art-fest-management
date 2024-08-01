import { useState } from 'react';
import styles from './candidates.module.css';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (e) => {
    e.preventDefault();
    const newCandidate = {
      code: e.target.code.value,
      name: e.target.name.value,
      team: e.target.team.value,
      section: e.target.section.value,
      class: e.target.class.value,
    };
    setCandidates([...candidates, newCandidate]);
    e.target.reset(); // Reset form fields
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Candidates</h2>
      <form onSubmit={addCandidate} className={styles.formContainer}>
        <input type="text" name="code" placeholder="Code" required />
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="team" placeholder="Team" required />
        <input type="text" name="section" placeholder="Section" required />
        <input type="text" name="class" placeholder="Class" required />
        <button type="submit" className={styles.button}>Add Candidate</button>
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
