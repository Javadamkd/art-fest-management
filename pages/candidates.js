import { useState } from 'react';

const Candidates = () => {
  const [chestNo, setChestNo] = useState('');
  const [name, setName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [section, setSection] = useState('');
  const [className, setClassName] = useState('');
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (e) => {
    e.preventDefault();
    setCandidates([...candidates, { chestNo, name, teamCode, section, className }]);
    setChestNo('');
    setName('');
    setTeamCode('');
    setSection('');
    setClassName('');
  };

  return (
    <div>
      <h1>Candidates</h1>
      <form onSubmit={addCandidate}>
        <input
          type="text"
          placeholder="Chest No"
          value={chestNo}
          onChange={(e) => setChestNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Code"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button type="submit">Add Candidate</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Chest No</th>
            <th>Name</th>
            <th>Team Code</th>
            <th>Section</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.chestNo}</td>
              <td>{candidate.name}</td>
              <td>{candidate.teamCode}</td>
              <td>{candidate.section}</td>
              <td>{candidate.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
