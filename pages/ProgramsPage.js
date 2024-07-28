// pages/ProgramsPage.js
import React, { useState } from 'react';

const ProgramsPage = () => {
  const [programs, setPrograms] = useState([]);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const addProgram = (e) => {
    e.preventDefault();
    const newProgram = { title, details };
    setPrograms([...programs, newProgram]);
    setTitle('');
    setDetails('');
  };

  return (
    <div>
      <h1>Programs</h1>
      <form onSubmit={addProgram}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Details" 
          value={details} 
          onChange={(e) => setDetails(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Add Program</button>
      </form>
      <ul>
        {programs.map((program, index) => (
          <li key={index}>
            <h2>{program.title}</h2>
            <p>{program.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
