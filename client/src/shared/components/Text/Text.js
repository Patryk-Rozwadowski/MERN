import React from 'react';
import {PropTypes} from 'prop-types';

const Text = ({variant, color, children,}) => {
    return (
        <p
            className={
            `section__${variant}-${color}`} >
            {children}
        </p>
    );
};

Text.defaultProps = {
    variant: 'text',
    color: 'black'
};

Text.propTypes = {
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default Text;