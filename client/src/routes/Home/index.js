import React from 'react';

import Home from './components/Home/Home';
import ComponentContainer from "../../shared/Container/Container";
import NavShared from '../../shared/Nav/index';
const HomeRoute = () => {
    return (
        <React.Fragment>
            <NavShared />
                <ComponentContainer variant='xl'>
                    <Home/>
                </ComponentContainer>
        </React.Fragment>
    )
};

export default HomeRoute;