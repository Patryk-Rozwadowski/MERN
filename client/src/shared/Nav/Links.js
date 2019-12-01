/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        color: 'white',
        marginRight: '50px',
    },
}));

const Links = (props) => {
    const classes = useStyles();

    return (
        <Link
            component="button"
            variant="body2"
            className={classes.title}
        >
            {props.children}
        </Link>
    );
}

export default Links;