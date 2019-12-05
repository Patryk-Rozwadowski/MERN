import React from 'react';
import { useSelector } from 'react-redux';

import UsersList from './UsersList';

const Users = props => {
    const testUsers = useSelector(state => state.users);
    debugger
    //return <UsersList items={testUsers} />
    return (
        <div>
            <p> {JSON.stringify(testUsers)} </p>
        </div>
    )
};

export default Users;