import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './routes/Users/Users';
import Home from './routes/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
