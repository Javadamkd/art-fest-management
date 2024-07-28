// pages/candidates.js
import React, { useState } from 'react';

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
    <div>
      <h1>Candidates</h1>
      <form onSubmit={addCandidate}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Code</label>
          <input 
            type="text" 
            placeholder="Code" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Team</label>
          <input 
            type="text" 
            placeholder="Team" 
            value={team} 
            onChange={(e) => setTeam(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Section</label>
          <input 
            type="text" 
            placeholder="Section" 
            value={section} 
            onChange={(e) => setSection(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Class</label>
          <input 
            type="text" 
            placeholder="Class" 
            value={classGrade} 
            onChange={(e) => setClassGrade(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Total Points</label>
          <input 
            type="number" 
            placeholder="Total Points" 
            value={totalPoints} 
            onChange={(e) => setTotalPoints(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Candidate</button>
      </form>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
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
