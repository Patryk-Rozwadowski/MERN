import React from 'react';
import {PropTypes} from 'prop-types';

const Button = ({children, type, variant, fullWidth, formmethod, dataCy,...otherProps}) => {
    return (
        <React.Fragment>
            <button
                type={type}
                formMethod={formmethod}
                data-cy={`button-${dataCy}`}
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
    dataCy: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    formmethod: PropTypes.string
};

export default Button;