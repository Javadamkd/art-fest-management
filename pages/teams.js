import { useState, useEffect } from 'react';

function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch data from API or local file
    fetch('/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsPage;
