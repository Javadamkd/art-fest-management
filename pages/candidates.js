import { useState, useEffect } from 'react';

function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch data from API or local file
    fetch('/api/candidates')
      .then(response => response.json())
      .then(data => setCandidates(data));
  }, []);

  return (
    <div>
      <h1>Candidates</h1>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CandidatesPage;
