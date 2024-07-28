// pages/CandidatesPage.js
import React, { useState } from 'react';

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addCandidate = (e) => {
    e.preventDefault();
    const newCandidate = { name, description };
    setCandidates([...candidates, newCandidate]);
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Candidates</h1>
      <form onSubmit={addCandidate}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Add Candidate</button>
      </form>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            <h2>{candidate.name}</h2>
            <p>{candidate.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesPage;
