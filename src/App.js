
import './App.css';
import SoccerTeamContainer from './components/SoccerTeamContainer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SoccerTeamDetails from './components/SoccerTeamDetails';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SoccerPlayerContainer from './components/SoccerPlayerContainer';

function App() {
  return (
    <Router>
        <div className="app-container">
          <div className="app-background">
          <NavBar />
          <Switch>
            <Route exact path="/soccer_players">
              <SoccerPlayerContainer />
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
        </div>
    </Router>
  );
}

export default App;
