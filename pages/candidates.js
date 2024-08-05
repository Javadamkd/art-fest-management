import { useState } from 'react';
import styles from '../styles/candidates.module.css'; // Import the CSS module

const Candidates = () => {
  const [chestNo, setChestNo] = useState('');
  const [name, setName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [section, setSection] = useState('');
  const [className, setClassName] = useState('');
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (e) => {
    e.preventDefault();
    setCandidates([...candidates, { chestNo, name, teamCode, section, className }]);
    setChestNo('');
    setName('');
    setTeamCode('');
    setSection('');
    setClassName('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Candidates</h1>
      <form onSubmit={addCandidate} className={styles.form}>
        <input
          type="text"
          placeholder="Chest No"
          value={chestNo}
          onChange={(e) => setChestNo(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Candidate</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Chest No</th>
            <th>Name</th>
            <th>Team Code</th>
            <th>Section</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.chestNo}</td>
              <td>{candidate.name}</td>
              <td>{candidate.teamCode}</td>
              <td>{candidate.section}</td>
              <td>{candidate.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
