import { useState } from 'react';
import styles from '../styles/programs.module.css';

const Programs = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [section, setSection] = useState('');
  const [scoreType, setScoreType] = useState('');
  const [gradeType, setGradeType] = useState('');
  const [programList, setProgramList] = useState([]);

  const addProgram = () => {
    const newProgram = { code, name, section, scoreType, gradeType };
    setProgramList([...programList, newProgram]);
    setCode('');
    setName('');
    setSection('');
    setScoreType('');
    setGradeType('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Programs</h2>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
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
        <select
          value={scoreType}
          onChange={(e) => setScoreType(e.target.value)}
          className={styles.inputField}
        >
          <option value="" disabled>
            Select Score Type
          </option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Shared by two">Shared by two</option>
          <option value="Master">Master</option>
        </select>
        <select
          value={gradeType}
          onChange={(e) => setGradeType(e.target.value)}
          className={styles.inputField}
        >
          <option value="" disabled>
            Select Grade Type
          </option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Shared by two">Shared by two</option>
          <option value="Master">Master</option>
        </select>
        <button onClick={addProgram} className={styles.submitButton}>
          Add Program
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Section</th>
              <th>Score Type</th>
              <th>Grade Type</th>
            </tr>
          </thead>
          <tbody>
            {programList.map((program, index) => (
              <tr key={index}>
                <td>{program.code}</td>
                <td>{program.name}</td>
                <td>{program.section}</td>
                <td>{program.scoreType}</td>
                <td>{program.gradeType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Programs;
