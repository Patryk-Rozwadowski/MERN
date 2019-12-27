import React from 'react';
import Button from '@material-ui/core/Button';

const MButtons = ({variants = '', ...props}) => {

    return (
        <React.Fragment>
            <Button>
                Secondary
            </Button>
        </React.Fragment>
    );
};

export default MButtons;