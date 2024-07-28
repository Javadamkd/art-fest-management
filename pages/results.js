import { useState, useEffect } from 'react';

function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data from API or local file
    fetch('/api/results')
      .then(response => response.json())
      .then(data => setResults(data));
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.candidateName} - {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
