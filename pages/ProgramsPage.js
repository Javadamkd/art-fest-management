import { useState, useEffect } from 'react';

function ProgramsPage() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('/api/programs')
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map(program => (
          <li key={program.id}>{program.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramsPage;
