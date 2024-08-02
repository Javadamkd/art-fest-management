import { useState } from 'react';
import styles from './teams.module.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', code: '' });

  const handleInputChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  const handleAddTeam = () => {
    setTeams([...teams, newTeam]);
    setNewTeam({ name: '', code: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <label className={styles.label}>Team Name:</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={newTeam.name}
          onChange={handleInputChange}
        />
        <label className={styles.label}>Team Code:</label>
        <input
          className={styles.input}
          type="text"
          name="code"
          value={newTeam.code}
          onChange={handleInputChange}
        />
        <button className={styles.button} onClick={handleAddTeam}>
          Add Team
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Team Code</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
