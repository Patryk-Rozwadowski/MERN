import React from 'react';
import {PropTypes} from 'prop-types';

const Button = ({children, type, variant, fullWidth, ...otherProps}) => {
    return (
        <React.Fragment>
            <button
                type={type}
                className={`
                    btn
                    btn-${variant}
                    ${fullWidth ? 'full-width' : []}
                `}
                {...otherProps}
            >
                {children}
            </button>
        </React.Fragment>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    type: PropTypes.string
};

export default Button;