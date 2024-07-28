// pages/TeamsPage.js
import React, { useState } from 'react';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState('');
  const [members, setMembers] = useState('');

  const addTeam = (e) => {
    e.preventDefault();
    const newTeam = { name, members: members.split(',').map(member => member.trim()) };
    setTeams([...teams, newTeam]);
    setName('');
    setMembers('');
  };

  return (
    <div>
      <h1>Teams</h1>
      <form onSubmit={addTeam}>
        <input 
          type="text" 
          placeholder="Team Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Members (comma separated)" 
          value={members} 
          onChange={(e) => setMembers(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Add Team</button>
      </form>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <h2>{team.name}</h2>
            <p>Members: {team.members.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsPage;
