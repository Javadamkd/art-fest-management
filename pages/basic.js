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
      <h1 className={styles.title}>Basic</h1>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Section List</h2>
        <form className={styles.form} onSubmit={handleSectionSubmit}>
          <input
            type="text"
            name="sectionName"
            value={sectionForm.sectionName}
            onChange={handleSectionChange}
            placeholder="Section Name"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Add Section</button>
        </form>
        <ul className={styles.list}>
          {sections.map((section, index) => (
            <li key={index} className={styles.listItem}>{section.sectionName}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Position Score Scale</h2>
        <form className={styles.form} onSubmit={handleScoreSubmit}>
          <div className={styles.formRow}>
            <select
              name="type"
              value={scoreForm.type}
              onChange={handleScoreChange}
              className={styles.select}
            >
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
              className={styles.input}
            />
            <input
              type="number"
              name="position2"
              value={scoreForm.position2}
              onChange={handleScoreChange}
              placeholder="2nd Position Score"
              className={styles.input}
            />
            <input
              type="number"
              name="position3"
              value={scoreForm.position3}
              onChange={handleScoreChange}
              placeholder="3rd Position Score"
              className={styles.input}
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="number"
              name="gradeA"
              value={scoreForm.gradeA}
              onChange={handleScoreChange}
              placeholder="Grade A Score"
              className={styles.input}
            />
            <input
              type="number"
              name="gradeB"
              value={scoreForm.gradeB}
              onChange={handleScoreChange}
              placeholder="Grade B Score"
              className={styles.input}
            />
            <input
              type="number"
              name="gradeC"
              value={scoreForm.gradeC}
              onChange={handleScoreChange}
              placeholder="Grade C Score"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Add Score Scale</button>
          </div>
        </form>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Type</th>
              <th className={styles.tableHeader}>1st Position</th>
              <th className={styles.tableHeader}>2nd Position</th>
              <th className={styles.tableHeader}>3rd Position</th>
              <th className={styles.tableHeader}>Grade A</th>
              <th className={styles.tableHeader}>Grade B</th>
              <th className={styles.tableHeader}>Grade C</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td className={styles.tableCell}>{score.type}</td>
                <td className={styles.tableCell}>{score.position1}</td>
                <td className={styles.tableCell}>{score.position2}</td>
                <td className={styles.tableCell}>{score.position3}</td>
                <td className={styles.tableCell}>{score.gradeA}</td>
                <td className={styles.tableCell}>{score.gradeB}</td>
                <td className={styles.tableCell}>{score.gradeC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
