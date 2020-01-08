import React from 'react';
import {PropTypes} from 'prop-types';

const Text = ({variant, color, children, textAlign}) => {
    return (
        <p className={
            `section__${variant}-${color} 
            ${textAlign ? `text-align-${textAlign}` : []} `}>
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
    children: PropTypes.string.isRequired,
    textAlign: PropTypes.string
};

export default Text;