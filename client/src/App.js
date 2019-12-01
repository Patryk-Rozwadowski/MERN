import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './routes/Users/Users';
import Home from './routes/Home/Home';
import SignUp from './routes/SignUp/SignUp'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Route path='/signup' exact component={SignUp} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
