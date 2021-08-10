
import './App.css';
import SoccerTeamContainer from './components/SoccerTeamContainer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SoccerTeamDetails from './components/SoccerTeamDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <div className="app-container">
          <div className="app-background"/>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <h2>HomePage</h2>
            </Route>
            <Route exact path="/soccer_teams">
              <h1>Soccer Info App</h1>
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
