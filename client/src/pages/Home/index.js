import React from 'react';

import Home from './components/Home/Home';
import NavShared from '../../components/Nav/Nav';

const HomeRoute = () => {
  return (
    <React.Fragment>
      <NavShared variant='transparent' />
      <Home />
    </React.Fragment>
  );
};

export default HomeRoute;
