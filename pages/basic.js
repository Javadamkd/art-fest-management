// pages/basic.js
import { useState } from 'react';
import styles from '../styles/Basic.module.css';

export default function Basic() {
  const [sections, setSections] = useState(['']);
  const [positionScores, setPositionScores] = useState({ first: '', second: '', third: '' });
  const [gradeScores, setGradeScores] = useState({ A: '', B: '', C: '' });

  const handleSectionChange = (index, value) => {
    const newSections = [...sections];
    newSections[index] = value;
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([...sections, '']);
  };

  const handlePositionScoreChange = (position, value) => {
    setPositionScores({
      ...positionScores,
      [position]: value,
    });
  };

  const handleGradeScoreChange = (grade, value) => {
    setGradeScores({
      ...gradeScores,
      [grade]: value,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Settings</h1>
      <form className={styles.formContainer}>
        <div className={styles.sectionContainer}>
          <label className={styles.label}>Section List:</label>
          {sections.map((section, index) => (
            <input
              key={index}
              className={styles.input}
              type="text"
              value={section}
              onChange={(e) => handleSectionChange(index, e.target.value)}
            />
          ))}
          <button type="button" className={styles.button} onClick={handleAddSection}>
            Add Section
          </button>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>
            Program Type:
            <select className={styles.select}>
              <option value="individual">Individual</option>
              <option value="shared">Shared by two</option>
              <option value="master">Master</option>
              <option value="group">Group</option>
              <option value="grade">Grade</option>
            </select>
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Position Score Scale:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="1st"
            value={positionScores.first}
            onChange={(e) => handlePositionScoreChange('first', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="2nd"
            value={positionScores.second}
            onChange={(e) => handlePositionScoreChange('second', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="3rd"
            value={positionScores.third}
            onChange={(e) => handlePositionScoreChange('third', e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Grade Score Scale:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="A"
            value={gradeScores.A}
            onChange={(e) => handleGradeScoreChange('A', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="B"
            value={gradeScores.B}
            onChange={(e) => handleGradeScoreChange('B', e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="C"
            value={gradeScores.C}
            onChange={(e) => handleGradeScoreChange('C', e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">Save</button>
      </form>
    </div>
  );
}
