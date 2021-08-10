
import './App.css';
import SoccerTeamContainer from './components/SoccerTeamContainer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="app-container">
          <div className="app-background"/>
          <h1>Soccer Info App</h1>
          <SoccerTeamContainer />
        </div>
    </Router>
  );
}

export default App;
