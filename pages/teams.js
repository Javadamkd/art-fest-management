import { useState } from 'react';
import styles from './teams.module.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const addTeam = (e) => {
    e.preventDefault();
    const newTeam = {
      code: e.target.code.value,
      name: e.target.name.value,
    };
    setTeams([...teams, newTeam]);
    e.target.reset(); // Reset form fields
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Teams</h2>
      <form onSubmit={addTeam} className={styles.formContainer}>
        <input type="text" name="code" placeholder="Code" required />
        <input type="text" name="name" placeholder="Name" required />
        <button type="submit" className={styles.button}>Add Team</button>
      </form>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.code}</td>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
