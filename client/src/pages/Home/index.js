import React from 'react';

import Home from './components/Home/Home';
import NavShared from '../../components/Nav/index';

const HomeRoute = () => {
  return (
    <React.Fragment>
      <NavShared variant='transparent' />
      <Home />
    </React.Fragment>
  );
};

export default HomeRoute;
