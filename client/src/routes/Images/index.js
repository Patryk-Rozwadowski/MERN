import React from 'react';

import Images from './components/Images/Images';
import NavShared from '../../shared/Nav/index';

const ImagesRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black'/>
            <Images/>
        </React.Fragment>
    );
};

export default ImagesRoute;