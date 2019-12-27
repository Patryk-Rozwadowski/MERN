import React from 'react';

import './styles/UserImage.scss';

const UserImage = props => {
    return (
        <div style={props.pos} className='photo__container'>
            <h2 className='photo__author'>{props.author ? props.author : 'unknown'}</h2>
            <img className='photo__image' src={props.imageUrl} alt={props.title} />
            <h2 className='photo__title'>{props.title ? props.title : 'unknown'}</h2>
            <div className='photo__info'>
                <p className='photo__info__element'> 5 Faves </p>
                <p className='photo__info__element'> 2 Comments </p>
                <p className='photo__info__element'> 1601 Views </p>
            </div>
        </div>
    );
};
// @todo I decided to move description to modal for image
// after clicking photo element user can see description with other infos
// <p className='photo__description'>{props.description ? props.description : 'No description'}</p>
export default UserImage;