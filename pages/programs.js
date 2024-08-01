import { useState } from 'react';
import styles from './programs.module.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const addProgram = (e) => {
    e.preventDefault();
    const newProgram = {
      code: e.target.code.value,
      name: e.target.name.value,
      section: e.target.section.value,
      scoreType: e.target.scoreType.value,
      status: e.target.status.value,
      publishedTime: e.target.publishedTime.value,
    };
    setPrograms([...programs, newProgram]);
    e.target.reset(); // Reset form fields
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Programs</h2>
      <form onSubmit={addProgram} className={styles.formContainer}>
        <input type="text" name="code" placeholder="Code" required />
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="section" placeholder="Section" required />
        <input type="text" name="scoreType" placeholder="Score Type" required />
        <input type="text" name="status" placeholder="Status" required />
        <input type="datetime-local" name="publishedTime" required />
        <button type="submit" className={styles.button}>Add Program</button>
      </form>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Section</th>
              <th>Score Type</th>
              <th>Status</th>
              <th>Published Time</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index}>
                <td>{program.code}</td>
                <td>{program.name}</td>
                <td>{program.section}</td>
                <td>{program.scoreType}</td>
                <td>{program.status}</td>
                <td>{program.publishedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Programs;
