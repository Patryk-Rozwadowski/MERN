import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Nav from './shared/Nav/Nav';
import HomeRoute from './routes/Home/index';
import SignUp from './routes/SignUp/SignUp';
import Users from './modules/Users/Users';
import Images from './routes/Images/Images';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={HomeRoute} />
        <Route path='/users' exact component={Users} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/images' exact component={Images} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
