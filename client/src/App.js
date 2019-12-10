import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import NavShared from './shared/Nav/index';
import HomeRoute from './routes/Home/index';
import SignUpRoute from './routes/SignUp/index';
import Users from './modules/Users/Users';
import ImagesRoute from './routes/Images/index';

const App = () => {
  return (
    <Router>
      <NavShared />
      <Switch>
        <Route path='/' exact component={HomeRoute} />
        <Route path='/users' exact component={Users} />
        <Route path='/signup' exact component={SignUpRoute} />
        <Route path='/images' exact component={ImagesRoute} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
