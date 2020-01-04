import React from 'react';

const UserImageCard = props => {
    return (
        <div className='images__image__container'>
            <h2 className='images__author'>{props.author ? props.author : 'unknown'}</h2>
            <img className='images__image' src={props.imageUrl} alt={props.title} />
            <h2 className='images__title'>{props.title ? props.title : 'unknown'}</h2>
            <div className='images__info'>
                <p className='images__info__element'> 5 Faves </p>
                <p className='images__info__element'> 2 Comments </p>
                <p className='images__info__element'> 1601 Views </p>
            </div>
        </div>
    );
};
// @todo I decided to move description to modal for image
// after clicking images element user can see description with other infos
// <p className='images__description'>{props.description ? props.description : 'No description'}</p>
export default UserImageCard;