import React from 'react';
import {PropTypes} from 'prop-types';

import TextField from '@material-ui/core/TextField';

const InputField = ({id, label, onChange, autoComplete, ...otherProps}) => {
    return (
        <React.Fragment>
            <TextField
                variant='outlined'
                margin='normal'
                id={id}
                label={label}
                name={id}
                onChange={onChange}
                autoComplete={autoComplete}
                {...otherProps}
            />
        </React.Fragment>
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    autoComplete: PropTypes.string
};

export default InputField;