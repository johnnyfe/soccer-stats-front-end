
import './App.css';
import SoccerTeamContainer from './components/SoccerTeamContainer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SoccerTeamDetails from './components/SoccerTeamDetails';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
        <div className="app-container">
          <div className="app-background"/>
          <NavBar />
          <Switch>
            <Route exact path="/soccer_players">
              <h2>All players comes here!</h2>
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/soccer_teams">
              <SoccerTeamContainer />
            </Route>
            <Route path="/soccer_teams/:id">
              <SoccerTeamDetails />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
