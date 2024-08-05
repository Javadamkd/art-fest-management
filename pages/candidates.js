import { useState } from 'react';
import styles from '../styles/candidates.module.css';

const Candidates = () => {
  const [chestNo, setChestNo] = useState('');
  const [name, setName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [section, setSection] = useState('');
  const [className, setClassName] = useState('');

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Chest No</label>
          <input
            type="text"
            value={chestNo}
            onChange={(e) => setChestNo(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Team Code</label>
          <input
            type="text"
            value={teamCode}
            onChange={(e) => setTeamCode(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Section</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Class</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Candidates;
