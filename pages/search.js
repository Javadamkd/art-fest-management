// pages/search.js
import React, { useState } from 'react';
import styles from '../styles/Search.module.css';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const search = (e) => {
    e.preventDefault();
    // Example search implementation
    const exampleResults = [
      { name: 'Candidate 1', program: 'Program A', team: 'Team X' },
      { name: 'Candidate 2', program: 'Program B', team: 'Team Y' },
    ];
    setResults(exampleResults.filter(result => 
      result.name.includes(searchTerm) || 
      result.program.includes(searchTerm) || 
      result.team.includes(searchTerm)
    ));
    setSearchTerm('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search</h1>
      <form onSubmit={search} className={styles.form}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search by candidate, program, or team"
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className={styles.row}>
              <td>{result.name}</td>
              <td>{result.program}</td>
              <td>{result.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
