import React from 'react';
import { NavLink } from 'react-router-dom';

const ImagesList = props => {
    if(props.usersImages.length === 0) {
        return (
            <div>
                <h2>Not found any images yet!</h2>
                <NavLink to='/addimage'>Maybe add one?</NavLink>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.usersImages.map(image => <UserImage key={image.id} id={image.id} /> )}
                </ul>
            </div>
        )
    }
};

export default ImagesList;