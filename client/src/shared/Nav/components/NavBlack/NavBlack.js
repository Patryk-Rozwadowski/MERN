import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Links from '../Links/Links';
import NavBlackMaterialStyles from "./styles/NavBlack-material.styles";
import Logo from '../../../Logo/Logo';

const NavBlack = () => {
    const classes = NavBlackMaterialStyles();

    return (
        <nav className={classes.root}>
            <AppBar className={classes.navBar} position="static">
                <Toolbar color='secondary'>
                    <Typography variant="h6" className={classes.title}>

                        <NavLink underline='none' to='/' className={classes.title}>
                            <Links> <Logo/> </Links>
                        </NavLink>

                        <NavLink underline='none' to='/' className={classes.title}>
                            <Links> Home </Links>
                        </NavLink>

                        <NavLink to='/users' className={classes.title}>
                            <Links> Users </Links>
                        </NavLink>

                        <NavLink to='/images' className={classes.title}>
                            <Links> Images </Links>
                        </NavLink>

                        <NavLink to='/addimage' className={classes.title}>
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
