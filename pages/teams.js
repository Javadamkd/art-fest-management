// pages/teams.js
import { useState } from 'react';
import styles from './teams.module.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const addTeam = (event) => {
    event.preventDefault();
    const newTeam = {
      code: event.target.elements.code.value,
      name: event.target.elements.name.value,
    };
    setTeams([...teams, newTeam]);
    event.target.reset(); // Reset form fields
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Add Team</h2>
        <form onSubmit={addTeam}>
          <div className={styles.formGroup}>
            <label htmlFor="code">Code</label>
            <input type="text" id="code" name="code" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <button type="submit">Add Team</button>
        </form>
      </div>
      <div className={styles.tableContainer}>
        <h2>Teams List</h2>
        <table>
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
