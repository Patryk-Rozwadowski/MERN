import React from 'react';

const Avatar = props => {
    return (
        <React.Fragment>
            <div className='avatar__container'>
                <img className='avatar__image' src={props.avatarUrl} alt={props.alt}/>
            </div>
        </React.Fragment>
    )
};

export default Avatar;