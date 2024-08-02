// pages/programs.js
import { useState } from 'react';
import styles from './programs.module.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const addProgram = (event) => {
    event.preventDefault();
    // Add program logic here
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addProgram}>
        <div className={styles.formGroup}>
          <label>Code</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label>Section</label>
          <input type="text" className={styles.inputField} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Program</button>
      </form>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index}>
                <td>{program.code}</td>
                <td>{program.name}</td>
                <td>{program.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
