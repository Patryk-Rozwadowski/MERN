/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	link: {
		flexGrow: 1,
		color: 'white',
        width: '150px',
        underline: 'none',
    },
    linkButton: {
        underline: 'none',
        textAlign: 'center'
    }
}));

const Links = (props) => {
	const classes = useStyles();

	return (
		<Button className={classes.linkButton} color='inherit'>
			<Link component='p' underline='none' variant='body2' className={classes.link}>
				{props.children}
			</Link>
		</Button>
	);
};

export default Links;
