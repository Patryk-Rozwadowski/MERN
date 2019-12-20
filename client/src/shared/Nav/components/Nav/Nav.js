import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Links from '../Links/Links';
import Logo from "../../../Logo/Logo";

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {fade} from "@material-ui/core/styles/colorManipulator";

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#37474f',
            transparent: fade('#37474f', 0.5)
        },
        secondary: {
            main: fade('#313131', 0.1)
        }
    }
});

const Nav = () => {
    return (
        <ThemeProvider theme={muiTheme}>
            <AppBar  color='secondary'>
                <Toolbar color='secondary'>
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
        </ThemeProvider>
    );
};

export default Nav;
