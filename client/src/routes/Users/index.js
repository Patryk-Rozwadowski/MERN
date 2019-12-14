import React from 'react';
import NavShared from '../../shared/Nav/index';
import Users from './components/Users/Users';
import ComponentContainer from "../../shared/Container/Container";

const UsersRoute = () => {
    return (
        <React.Fragment>
            <NavShared/>
            <ComponentContainer>
                <Users/>
            </ComponentContainer>
        </React.Fragment>
    )
};

export default UsersRoute;