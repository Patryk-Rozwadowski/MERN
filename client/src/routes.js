import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeRoute from './pages/Home/index';
import SignUpRoute from './pages/SignUp/index';
import UsersList from './pages/Users/Users';
import UserImagesListRoute from './pages/UserImagesList/index';
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
        <Route path='/:id/images' exact component={UserImagesListRoute} />
      </Switch>
    </Router>
  );
};

export default Routes;
