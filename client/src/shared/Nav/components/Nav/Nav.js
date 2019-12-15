import React from 'react';
import {NavLink} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Links from '../Links/Links';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#fff',
        underline: 'none',
        fontSize: 3
    },
    navBar: {
        backgroundColor: 'rgba(0,0,0,0.15)',
        position: 'fixed',
        top: '0',
    }
});

const Nav = () => {
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <AppBar className={classes.navBar} position="static">
                <Toolbar color='secondary'>
                    <Typography variant="h6" className={classes.title}>

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

export default Nav;
