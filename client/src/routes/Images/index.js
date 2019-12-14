import React from 'react';

import Images from './components/Images/Images';
import ComponentContainer from '../../shared/Container/Container';
import NavShared from '../../shared/Nav/index';

const ImagesRoute = () => {
    return (
        <React.Fragment>
            <NavShared />
            <ComponentContainer variant='xl'>
                <Images/>
            </ComponentContainer>
        </React.Fragment>
    )
};

export default ImagesRoute;