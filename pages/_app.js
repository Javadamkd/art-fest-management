import '../styles/styles.css';
import HomePage from './pages/HomePage';
import CandidatesPage from './pages/CandidatesPage';
import ProgramsPage from './pages/ProgramsPage';
import ResultsPage from './pages/ResultsPage';
import TeamsPage from './pages/TeamsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/candidates" component={CandidatesPage} />
        <Route path="/programs" component={ProgramsPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/teams" component={TeamsPage} />
      </Switch>
    </Router>
  );
}

export default App;
