import React from 'react'

const UserItems = props => {
    return ( 
    <div>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.places}</p>
        <img src={props.image} />
    </div> 
    )
};

export default UserItems;