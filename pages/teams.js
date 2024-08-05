// pages/teams.js
import { useState } from 'react';
import styles from './Teams.module.css';

const Teams = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamLeader, setTeamLeader] = useState('');

  return (
    <div className={styles.formContainer}>
      <form className={styles.teamForm}>
        <label>Team Code:</label>
        <input type="text" name="teamCode" placeholder="Enter Team Code" value={teamCode} onChange={(e) => setTeamCode(e.target.value)} />
        
        <label>Team Name:</label>
        <input type="text" name="teamName" placeholder="Enter Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        
        <label>Team Leader:</label>
        <input type="text" name="teamLeader" placeholder="Enter Team Leader" value={teamLeader} onChange={(e) => setTeamLeader(e.target.value)} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Teams;
