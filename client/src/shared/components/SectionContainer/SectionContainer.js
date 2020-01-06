import React from 'react';
import Grid from '@material-ui/core/Grid';

const SectionContainer = ({children}) => {
    return (
        <React.Fragment>
            <section style={{marginTop: '100px'}}>
                <Grid container>
                    {children}
                </Grid>
            </section>
        </React.Fragment>
    )
};

export default SectionContainer;