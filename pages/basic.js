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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Persist the data here (e.g., save to local storage or send to an API)
    console.log({
      sections,
      positionScores,
      gradeScores,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Basic Settings</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
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
          <button type="button" className={styles.addButton} onClick={handleAddSection}>
            Add Section
          </button>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Program Type:</label>
          <select className={styles.select}>
            <option value="individual">Individual</option>
            <option value="shared">Shared by two</option>
            <option value="master">Master</option>
            <option value="group">Group</option>
            <option value="grade">Grade</option>
          </select>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Position Score Scale:</label>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>1st:</label>
            <input
              className={styles.input}
              type="number"
              value={positionScores.first}
              onChange={(e) => handlePositionScoreChange('first', e.target.value)}
            />
          </div>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>2nd:</label>
            <input
              className={styles.input}
              type="number"
              value={positionScores.second}
              onChange={(e) => handlePositionScoreChange('second', e.target.value)}
            />
          </div>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>3rd:</label>
            <input
              className={styles.input}
              type="number"
              value={positionScores.third}
              onChange={(e) => handlePositionScoreChange('third', e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Grade Score Scale:</label>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>A:</label>
            <input
              className={styles.input}
              type="number"
              value={gradeScores.A}
              onChange={(e) => handleGradeScoreChange('A', e.target.value)}
            />
          </div>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>B:</label>
            <input
              className={styles.input}
              type="number"
              value={gradeScores.B}
              onChange={(e) => handleGradeScoreChange('B', e.target.value)}
            />
          </div>
          <div className={styles.scoreContainer}>
            <label className={styles.scoreLabel}>C:</label>
            <input
              className={styles.input}
              type="number"
              value={gradeScores.C}
              onChange={(e) => handleGradeScoreChange('C', e.target.value)}
            />
          </div>
        </div>
        <button className={styles.button} type="submit">Save</button>
      </form>
    </div>
  );
}
