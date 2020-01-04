import React from 'react';

import UserImagesList from './components/UserImagesList/UserImagesList';
import NavShared from '../../shared/modules/Nav/index';
import UserInfo from "./components/UserInfo/UserInfo";

const UserImagesListRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black'/>
            <UserInfo />
            <UserImagesList/>
        </React.Fragment>
    );
};

export default UserImagesListRoute;