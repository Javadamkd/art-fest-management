import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CandidatesPage from './pages/CandidatesPage';
import ProgramsPage from './pages/ProgramsPage';
import ResultsPage from './pages/ResultsPage';
import TeamsPage from './pages/TeamsPage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/candidates" component={CandidatesPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/teams" component={TeamsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

