import React from 'react';

import {Link as LinkRouter} from 'react-router-dom';

const Link = ({children, to}) => {
    return (
        <React.Fragment>
            <LinkRouter to={to} className='link'>
                {children}
            </LinkRouter>
        </React.Fragment>
    );
};

export default Link;