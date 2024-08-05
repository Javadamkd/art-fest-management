import { useState } from 'react';
import styles from '../styles/teams.module.css'; // Import the CSS module

const Teams = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([]);

  const addTeam = (e) => {
    e.preventDefault();
    setTeams([...teams, { teamCode, teamName }]);
    setTeamCode('');
    setTeamName('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Teams</h1>
      <form onSubmit={addTeam} className={styles.form}>
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Team</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Team Code</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.teamCode}</td>
              <td>{team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
