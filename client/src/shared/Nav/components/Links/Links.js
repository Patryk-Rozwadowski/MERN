/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import LinksStyles from './styles/Links-material';

const Links = (props) => {
	const classes = LinksStyles();

	return (
		<Button className={LinksStyles.linkButton} color='inherit'>
			<Link component='p' underline='none' variant='body2' className={classes.link}>
				{props.children}
			</Link>
		</Button>
	);
};

export default Links;
