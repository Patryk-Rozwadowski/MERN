import React from 'react';
import { useSelector } from 'react-redux';

import UsersList from '../UsersList';
//return <UsersList items={testUsers} />

const Users = props => {
    return (
        <React.Fragment>
            <UsersList />
        </React.Fragment>
    )
};

export default Users;