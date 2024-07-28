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
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          placeholder="Code" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          placeholder="Team" 
          value={team} 
          onChange={(e) => setTeam(e.target.value)} 
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          placeholder="Section" 
          value={section} 
          onChange={(e) => setSection(e.target.value)} 
          required 
          className={styles.input}
        />
        <input 
          type="text" 
          placeholder="Class" 
          value={classGrade} 
          onChange={(e) => setClassGrade(e.target.value)} 
          required 
          className={styles.input}
        />
        <input 
          type="number" 
          placeholder="Total Points" 
          value={totalPoints} 
          onChange={(e) => setTotalPoints(e.target.value)} 
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Candidate</button>
      </form>
      <ul className={styles.list}>
        {candidates.map((candidate, index) => (
          <li key={index} className={styles.candidate}>
            <h2>{candidate.name}</h2>
            <p>Code: {candidate.code}</p>
            <p>Team: {candidate.team}</p>
            <p>Section: {candidate.section}</p>
            <p>Class: {candidate.classGrade}</p>
            <p>Total Points: {candidate.totalPoints}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesPage;
