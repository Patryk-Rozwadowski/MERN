import React from 'react';

const Avatar = ({avatarUrl, alt}) =>
    <div className='avatar__container'>
        <img className='avatar__image' src={avatarUrl} alt={alt}/>
    </div>;

export default Avatar;