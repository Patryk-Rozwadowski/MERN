import React from 'react';

import './styles/UserImage.scss';

const UserImage = props => {
    return (
        <div className='userImage__container'>
            <h2 className='userImage__author'>Author: {props.author ? props.author : 'unknown'}</h2>
            <img className='userImage__image' src={props.imageUrl} alt={props.title} />
            <h2 className='userImage__title'>{props.title ? props.title : 'unknown'}</h2>
            <p className='userImage__description'>{props.description ? props.description : 'No description'}</p>
        </div>
    );
};

export default UserImage;