import React from 'react';
import {PropTypes} from 'prop-types';

import {Link as LinkRouter} from 'react-router-dom';

const Link = ({children, to, dataCy}) => {
    return (
        <React.Fragment>
            <LinkRouter
                to={to}
                className='link'
                data-cy={`link-${dataCy}`}>
                {children}
            </LinkRouter>
        </React.Fragment>
    );
};

Link.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    dataCy: PropTypes.string.isRequired
};

export default Link;