import Grid from "@material-ui/core/Grid";
import Link from "../../../../components/Link/Link";
import React from "react";

const LinkToSignIn = () => <Grid container direction='row'>
    <Grid lg={12} align={'right'} item>
        <Link dataCy='link-to-signin' to='/sign-in'>
            Already have an account? Sign in
        </Link>
    </Grid>
</Grid>

export default LinkToSignIn;
