import React from 'react';
import {NavLink} from 'react-router-dom';

import Links from '../Links/Links';
import Logo from '../../../Logo/Logo';

import {createMuiTheme} from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';

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
        <nav className='nav nav-transparent'>
            <NavLink underline='none' to='/'>
                <Links> <Logo/> </Links>
            </NavLink>

            <NavLink to='/'>
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

            <NavLink to='/signin'>
                <Links>Login</Links>
            </NavLink>

            <NavLink to='/signup'>
                <Links>Register</Links>
            </NavLink>
        </nav>
    );
};

export default Nav;
