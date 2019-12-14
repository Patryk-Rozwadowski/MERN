import React from 'react';

import Home from './components/Home/Home';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ComponentContainer from "../../shared/Container/Container";

const HomeRoute = () => {
    return (
        <React.Fragment>
            <ComponentContainer variant='xl'>
                <Home/>
            </ComponentContainer>
        </React.Fragment>
)
};

export default HomeRoute;