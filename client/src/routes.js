import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeRoute from './pages/Home/index';
import SignUpRoute from './pages/SignUp/index';
import UsersList from './pages/UsersList/UsersList';
import UserProfile from './pages/UserProfile/UserProfile';
import AddImageRoute from './pages/AddImage/index';
import SignInRoute from './pages/SignIn/index';
import AllImagesRoute from './pages/AllImages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomeRoute} />
        <Route path='/users-list' exact component={UsersList} />
        <Route path='/sign-up' exact component={SignUpRoute} />
        <Route path='/sign-in' exact component={SignInRoute} />
        <Route path='/add-image' exact component={AddImageRoute} />
        <Route path='/images' exact component={AllImagesRoute} />
        <Route path='/:id/profile/images' exact component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
