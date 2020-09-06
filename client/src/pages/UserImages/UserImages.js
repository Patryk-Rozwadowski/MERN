import React from 'react';

import UserImagesList from './components/UserImagesList/UserImagesList';
import NavShared from '../../components/Nav/Nav';
import UserInfoList from './components/UserInfoList/UserInfoList';

const UserImages = () => (
  <React.Fragment>
    <NavShared variant='black' />
    <UserInfoList />
    <UserImagesList />
  </React.Fragment>
);

export default UserImages;
