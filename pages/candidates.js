import { useState } from 'react';
import styles from '../styles/candidates.module.css';

const Candidates = () => {
  const [chestNo, setChestNo] = useState('');
  const [name, setName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [section, setSection] = useState('');
  const [candidateList, setCandidateList] = useState([]);

  const addCandidate = () => {
    const newCandidate = { chestNo, name, teamCode, section };
    setCandidateList([...candidateList, newCandidate]);
    setChestNo('');
    setName('');
    setTeamCode('');
    setSection('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Candidates</h2>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Chest No"
          value={chestNo}
          onChange={(e) => setChestNo(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
          className={styles.inputField}
        />
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className={styles.inputField}
        >
          <option value="" disabled>
            Select Section
          </option>
          <option value="Aliya">Aliya</option>
          <option value="Thaniya">Thaniya</option>
          <option value="Thanawiyya">Thanawiyya</option>
          <option value="Bidaya">Bidaya</option>
          <option value="Uoola">Uoola</option>
        </select>
        <button onClick={addCandidate} className={styles.submitButton}>
          Add Candidate
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Chest No</th>
              <th>Name</th>
              <th>Team Code</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {candidateList.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.chestNo}</td>
                <td>{candidate.name}</td>
                <td>{candidate.teamCode}</td>
                <td>{candidate.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candidates;
