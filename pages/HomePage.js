import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Art Fest Management</h1>
      <ul>
        <li><Link to="/candidates">Candidates</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
