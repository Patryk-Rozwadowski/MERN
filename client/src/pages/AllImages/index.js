import React from 'react';

import NavShared from '../../components/Nav/Nav';
import AllImagesList from './components/AllImagesList/AllImagesList';

const AllImagesRoute = () => {
  return (
    <React.Fragment>
      <NavShared variant='black' />
      <AllImagesList />
    </React.Fragment>
  );
};

export default AllImagesRoute;
