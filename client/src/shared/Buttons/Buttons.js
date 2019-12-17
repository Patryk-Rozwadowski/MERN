import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const MButtons = ({variants = '', ...props}) => {

    return (
        <React.Fragment>
            <Button>
                {props.children}
            </Button>
        </React.Fragment>
    );
};

export default MButtons;