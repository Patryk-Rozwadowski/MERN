import React from 'react';
import {PropTypes} from 'prop-types';

import TextField from '@material-ui/core/TextField';

const InputField = ({id, label, onChange, autoComplete, dataCy, width, height, lg, md, sm, ...otherProps}) => {
    return (
        <React.Fragment>
            <TextField
                variant='standard'
                margin='normal'
                id={id}
                label={label}
                name={id}
                onChange={onChange}
                autoComplete={autoComplete}

                className={`
                    lg-${lg}
                    md-${md}
                    sm-${sm}`}

                data-cy={`inputField-${dataCy}`}
                {...otherProps}
            />
        </React.Fragment>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    dataCy: PropTypes.string.isRequired,
    autoComplete: PropTypes.string,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number
};

export default InputField;