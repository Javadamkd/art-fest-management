import { useState } from 'react';

const Teams = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState([]);

  const addTeam = (e) => {
    e.preventDefault();
    setTeams([...teams, { teamCode, teamName }]);
    setTeamCode('');
    setTeamName('');
  };

  return (
    <div>
      <h1>Teams</h1>
      <form onSubmit={addTeam}>
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button type="submit">Add Team</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Team Code</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.teamCode}</td>
              <td>{team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
