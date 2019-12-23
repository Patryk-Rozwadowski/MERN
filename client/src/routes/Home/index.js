import React from 'react';

import Home from './components/Home/Home';
import NavShared from '../../shared/Nav/index';

const HomeRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='transition'/>
            <Home/>
        </React.Fragment>
    );
};

export default HomeRoute;