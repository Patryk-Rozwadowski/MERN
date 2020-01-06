import React from 'react';

import UserImagesList from './components/UserImagesList/UserImagesList';
import NavShared from '../../shared/modules/Nav/index';
import UserInfoList from './components/UserInfoList/UserInfoList';

const UserImagesListRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black'/>
            <UserInfoList/>
            <UserImagesList/>
        </React.Fragment>
    );
};

export default UserImagesListRoute;