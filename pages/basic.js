// pages/basic.js
import { useState } from 'react';
import styles from '../styles/Basic.module.css';

export default function Basic() {
  const [sections, setSections] = useState([]);
  const [sectionForm, setSectionForm] = useState({ sectionName: '' });
  const [scores, setScores] = useState([]);
  const [scoreForm, setScoreForm] = useState({
    type: 'Individual',
    position1: '',
    position2: '',
    position3: '',
    gradeA: '',
    gradeB: '',
    gradeC: ''
  });

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setSectionForm({ ...sectionForm, [name]: value });
  };

  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    setScoreForm({ ...scoreForm, [name]: value });
  };

  const handleSectionSubmit = (e) => {
    e.preventDefault();
    setSections([...sections, sectionForm]);
    setSectionForm({ sectionName: '' });
  };

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    setScores([...scores, scoreForm]);
    setScoreForm({
      type: 'Individual',
      position1: '',
      position2: '',
      position3: '',
      gradeA: '',
      gradeB: '',
      gradeC: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1>Basic</h1>

      <div className={styles.section}>
        <h2>Section List</h2>
        <form className={styles.form} onSubmit={handleSectionSubmit}>
          <input
            type="text"
            name="sectionName"
            value={sectionForm.sectionName}
            onChange={handleSectionChange}
            placeholder="Section Name"
          />
          <button type="submit">Add Section</button>
        </form>
        <ul className={styles.list}>
          {sections.map((section, index) => (
            <li key={index}>{section.sectionName}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Position Score Scale</h2>
        <form className={styles.form} onSubmit={handleScoreSubmit}>
          <select name="type" value={scoreForm.type} onChange={handleScoreChange}>
            <option value="Individual">Individual</option>
            <option value="Shared by two">Shared by two</option>
            <option value="Master">Master</option>
            <option value="Group">Group</option>
          </select>
          <input
            type="number"
            name="position1"
            value={scoreForm.position1}
            onChange={handleScoreChange}
            placeholder="1st Position Score"
          />
          <input
            type="number"
            name="position2"
            value={scoreForm.position2}
            onChange={handleScoreChange}
            placeholder="2nd Position Score"
          />
          <input
            type="number"
            name="position3"
            value={scoreForm.position3}
            onChange={handleScoreChange}
            placeholder="3rd Position Score"
          />
          <input
            type="number"
            name="gradeA"
            value={scoreForm.gradeA}
            onChange={handleScoreChange}
            placeholder="Grade A Score"
          />
          <input
            type="number"
            name="gradeB"
            value={scoreForm.gradeB}
            onChange={handleScoreChange}
            placeholder="Grade B Score"
          />
          <input
            type="number"
            name="gradeC"
            value={scoreForm.gradeC}
            onChange={handleScoreChange}
            placeholder="Grade C Score"
          />
          <button type="submit">Add Score Scale</button>
        </form>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>1st Position</th>
              <th>2nd Position</th>
              <th>3rd Position</th>
              <th>Grade A</th>
              <th>Grade B</th>
              <th>Grade C</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td>{score.type}</td>
                <td>{score.position1}</td>
                <td>{score.position2}</td>
                <td>{score.position3}</td>
                <td>{score.gradeA}</td>
                <td>{score.gradeB}</td>
                <td>{score.gradeC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
