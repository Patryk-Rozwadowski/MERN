import React from 'react';
import NavShared from '../../shared/modules/Nav/index';
import Users from './components/Users/Users';

const UsersRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black' />
                <Users/>
        </React.Fragment>
    )
};

export default UsersRoute;