import React from 'react';

const Avatar = props => {
    return (
        <React.Fragment>
            <div className='avatar__container'>
                <img className='avatar__image' src={props.avatarUrl} alt={props.name}/>
            </div>
        </React.Fragment>
    )
};

export default Avatar;