import React from 'react';

import '../styles/UserImage.css';

const UserImage = props => {
    return (
        <div>
            <h2 className='userImage__author'>Author: {props.author ? props.author : 'unknown'}</h2>
            <img src={props.imageUrl} alt={props.title} />
            <h2>Title: {props.name ? props.name : 'unknown'}</h2>
            <p>{props.description ? props.description : 'No description'}</p>
        </div>
    );
};

export default UserImage;