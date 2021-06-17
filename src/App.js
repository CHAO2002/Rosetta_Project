import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home/home.component';

import githubLogo from './github_logo.png';
import './App.css';

const App = ({ page }) => {
  return (
    <div className="App">
      <Link to={`/${page}`}>
        <img className="logo" src={githubLogo} alt="Logo" />
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:page" component={HomePage} />
      </Switch>
    </div>
  );
};

export default connect(null)(App);
