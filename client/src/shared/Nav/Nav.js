import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Links from './Links';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
        color: 'white',
    },
}));

const Nav = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar color='secondary'>
                    <Typography variant="h6" className={classes.title}>

                        <NavLink to='/' className={classes.title} >
                            <Links> Home </Links>
                        </NavLink>

                        <NavLink to='/users' className={classes.title}>
                            <Links> Users </Links> 
                        </NavLink>

                        <NavLink to='/images' className={classes.title}>
                            <Links> Images </Links>
                        </NavLink>

                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
