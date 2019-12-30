import React from 'react';

import UserImagesList from './components/UserImagesList/UserImagesList';
import NavShared from '../../shared/modules/Nav/index';

const UserImagesListRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black'/>
            <UserImagesList/>
        </React.Fragment>
    );
};

export default UserImagesListRoute;