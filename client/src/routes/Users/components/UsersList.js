import React from 'react';
import UsersItems from './UserItems/UserItems';

// Todo: seperate into css files
const styles = {
    listContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

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
            <ul style={styles.listContainer}>
                {props.items.map(user =>
                    <UsersItems
                        key={user.id}
                        id={user.id}
                        places={user.places}
                        name={user.name}
                        image={user.image}
                        description={user.description} />)}
            </ul>
        )
    }
};

export default UsersList;