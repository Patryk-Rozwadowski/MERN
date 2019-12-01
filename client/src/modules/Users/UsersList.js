import React from 'react';
import UsersItems from './UserItems';

const UsersList = (props) => {
    if (!props.items.length) {
        return (
            <div>
                <h2>No users found.</h2>
            </div> 
        )
    }

    if (props.items.length) {
        return (
            <ul>
                {props.items.map(user =>
                    <UsersItems
                        key={user.id}
                        id={user.id}
                        places={user.places}
                        name={user.name}
                        image={user.image} />)}
            </ul>
        )
    }
}

export default UsersList;