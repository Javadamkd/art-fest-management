// pages/programs.js
import { useState } from 'react';
import styles from './programs.module.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const addProgram = (event) => {
    event.preventDefault();
    // Logic to add a program (This should be defined as per your application logic)
    // Example:
    const newProgram = {
      code: event.target.elements.code.value,
      name: event.target.elements.name.value,
      section: event.target.elements.section.value,
    };
    setPrograms([...programs, newProgram]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addProgram}>
        <div className={styles.formGroup}>
          <label htmlFor="code">Code</label>
          <input id="code" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="section">Section</label>
          <input id="section" type="text" className={styles.inputField} required />
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
};

export default Programs;
