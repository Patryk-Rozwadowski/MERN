import React from 'react';
import Grid from '@material-ui/core/Grid';

const SectionContainer = ({ children }) =>
    <Grid className='container' container>
      {children}
    </Grid>

export default SectionContainer;
