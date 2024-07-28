// pages/ResultsPage.js
import React, { useState } from 'react';

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [candidate, setCandidate] = useState('');
  const [score, setScore] = useState('');

  const addResult = (e) => {
    e.preventDefault();
    const newResult = { candidate, score };
    setResults([...results, newResult]);
    setCandidate('');
    setScore('');
  };

  return (
    <div>
      <h1>Results</h1>
      <form onSubmit={addResult}>
        <input 
          type="text" 
          placeholder="Candidate" 
          value={candidate} 
          onChange={(e) => setCandidate(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Score" 
          value={score} 
          onChange={(e) => setScore(e.target.value)} 
          required 
        />
        <button type="submit">Add Result</button>
      </form>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h2>{result.candidate}</h2>
            <p>Score: {result.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPage;
