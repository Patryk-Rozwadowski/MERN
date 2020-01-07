import React from 'react';
import Grid from '@material-ui/core/Grid';

const SectionContainer = ({children}) => {
    return (
            <Grid direction={'row'} justify='center' alignItems={'center'}>
                {children}
            </Grid>
    );
};

export default SectionContainer;