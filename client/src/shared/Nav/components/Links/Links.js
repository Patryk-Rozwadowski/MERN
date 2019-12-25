import React from 'react';

const Links = (props) => {
	return (
		<React.Fragment>
			<a className='link'>
				{props.children}
			</a>
		</React.Fragment>
	);
};

export default Links;
