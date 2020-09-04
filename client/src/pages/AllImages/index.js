import React from 'react';

import NavShared from '../../components/Nav/Nav';
import AllImagesList from './components/AllImagesList/AllImagesList';

const AllImagesRoute = () =>
    <>
      <NavShared variant='black' />
      <AllImagesList />
    </>

export default AllImagesRoute;
