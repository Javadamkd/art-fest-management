import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/candidates">Candidates</Link>
      <Link to="/programs">Programs</Link>
      <Link to="/results">Results</Link>
      <Link to="/teams">Teams</Link>
    </nav>
  );
}

export default Navigation;

