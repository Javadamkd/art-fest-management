import { useState } from 'react';
import styles from '../styles/teams.module.css';

const Teams = () => {
  const [teamName, setTeamName] = useState('');
  const [leader, setLeader] = useState('');
  const [members, setMembers] = useState('');

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Leader</label>
          <input
            type="text"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Members</label>
          <input
            type="text"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Teams;
