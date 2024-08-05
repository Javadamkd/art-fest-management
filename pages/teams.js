import { useState } from 'react';
import styles from '../styles/teams.module.css';

const Teams = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamSection, setTeamSection] = useState('');
  const [teamList, setTeamList] = useState([]);

  const addTeam = () => {
    const newTeam = { teamCode, teamName, teamSection };
    setTeamList([...teamList, newTeam]);
    setTeamCode('');
    setTeamName('');
    setTeamSection('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Teams</h2>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className={styles.inputField}
        />
        <select
          value={teamSection}
          onChange={(e) => setTeamSection(e.target.value)}
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
        <button onClick={addTeam} className={styles.submitButton}>
          Add Team
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Team Code</th>
              <th>Team Name</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {teamList.map((team, index) => (
              <tr key={index}>
                <td>{team.teamCode}</td>
                <td>{team.teamName}</td>
                <td>{team.teamSection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
