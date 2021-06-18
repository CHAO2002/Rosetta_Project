import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:page" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
