import React from 'react';
import { NavLink } from 'react-router-dom';

import UserImage from './UserImage';
// Todo: seperate into css files
const styles = {
    listContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

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
                <ul >
                    {props.usersImages.map(image => <UserImage 
                        key={image.id}
                        author={image.author}
                        id={image.id}
                        title={image.title}
                        name={image.name}
                        imageUrl={image.imageUrl}
                        description={image.description}/> )}
                </ul>
            </div>
        )
    }
};

export default ImagesList;