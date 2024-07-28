// pages/rankAndTop.js
import React, { useState } from 'react';
import styles from '../styles/RankAndTop.module.css';

const RankAndTopPage = () => {
  const [rankings, setRankings] = useState([]);
  const [section, setSection] = useState('');
  const [allSections, setAllSections] = useState([]);

  const addRanking = (e) => {
    e.preventDefault();
    const newRanking = { section };
    setRankings([...rankings, newRanking]);
    setSection('');
  };

  const addAllSections = (e) => {
    e.preventDefault();
    const newAllSection = { section };
    setAllSections([...allSections, newAllSection]);
    setSection('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rank & Top</h1>
      <form onSubmit={addRanking} className={styles.form}>
        <input 
          type="text" 
          value={section} 
          onChange={(e) => setSection(e.target.value)} 
          placeholder="Section"
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Section Ranking</button>
      </form>
      <form onSubmit={addAllSections} className={styles.form}>
        <input 
          type="text" 
          value={section} 
          onChange={(e) => setSection(e.target.value)} 
          placeholder="All Sections"
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add All Sections Ranking</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((ranking, index) => (
            <tr key={index} className={styles.row}>
              <td>{ranking.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>All Sections</th>
          </tr>
        </thead>
        <tbody>
          {allSections.map((allSection, index) => (
            <tr key={index} className={styles.row}>
              <td>{allSection.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankAndTopPage;
