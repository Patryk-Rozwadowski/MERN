import React from 'react';

import Images from './components/Images/Images';
import ComponentContainer from "../../shared/Container/Container";

const ImagesRoute = () => {
    return (
        <React.Fragment>
            <ComponentContainer variant='xl'>
                <Images/>
            </ComponentContainer>
        </React.Fragment>
    )
};

export default ImagesRoute;