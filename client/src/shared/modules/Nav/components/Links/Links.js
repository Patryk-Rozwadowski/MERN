import React from 'react';

const Links = (props) => {
	return (
		<React.Fragment>
			<a data-cy={props.cy} className='link'>
				{props.children}
			</a>
		</React.Fragment>
	);
};

export default Links;
