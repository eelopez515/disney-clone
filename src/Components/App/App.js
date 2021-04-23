import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Components
import Header from '../Header/Header';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
