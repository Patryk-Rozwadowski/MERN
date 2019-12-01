import React from 'react'

import UsersList from './UsersList';

const Users = props => {
    const testUsers = [
        {
            id: 'q1',
            name: 'Patryk',
            places: 3,
            image: 'https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'Hello world! Work is still in progress! :)'
        }
    ];

    return <UsersList items={testUsers} />
};

export default Users;