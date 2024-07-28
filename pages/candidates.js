// pages/candidates.js
import React, { useState } from 'react';
import styles from '../styles/Candidates.module.css';

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [team, setTeam] = useState('');
  const [section, setSection] = useState('');
  const [classGrade, setClassGrade] = useState('');
  const [totalPoints, setTotalPoints] = useState('');

  const addCandidate = (e) => {
    e.preventDefault();
    const newCandidate = { name, code, team, section, classGrade, totalPoints };
    setCandidates([...candidates, newCandidate]);
    setName('');
    setCode('');
    setTeam('');
    setSection('');
    setClassGrade('');
    setTotalPoints('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Candidates</h1>
      <form onSubmit={addCandidate} className={styles.form}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name"
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder="Code"
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          value={team} 
          onChange={(e) => setTeam(e.target.value)} 
          placeholder="Team"
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          value={section} 
          onChange={(e) => setSection(e.target.value)} 
          placeholder="Section"
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          value={classGrade} 
          onChange={(e) => setClassGrade(e.target.value)} 
          placeholder="Class"
          required 
          className={styles.input}
        />
        <input 
          type="number" 
          value={totalPoints} 
          onChange={(e) => setTotalPoints(e.target.value)} 
          placeholder="Total Points"
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Candidate</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Team</th>
            <th>Section</th>
            <th>Class</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} className={styles.row}>
              <td>{candidate.name}</td>
              <td>{candidate.code}</td>
              <td>{candidate.team}</td>
              <td>{candidate.section}</td>
              <td>{candidate.classGrade}</td>
              <td>{candidate.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesPage;
