import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Links from '../Links/Links';
import Logo from '../../../Logo/Logo';

const NavBlack = () => {
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <NavLink underline='none' to='/'>
                            <Links> <Logo/> </Links>
                        </NavLink>

                        <NavLink underline='none' to='/'>
                            <Links> Home </Links>
                        </NavLink>

                        <NavLink to='/users'>
                            <Links> Users </Links>
                        </NavLink>

                        <NavLink to='/images'>
                            <Links> Images </Links>
                        </NavLink>

                        <NavLink to='/addimage'>
                            <Links> Add image </Links>
                        </NavLink>

                    </Typography>

                    <NavLink to='/signin'>
                        <Links>Login</Links>
                    </NavLink>
                    <NavLink to='/signup'>
                        <Links>Register</Links>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default NavBlack;
