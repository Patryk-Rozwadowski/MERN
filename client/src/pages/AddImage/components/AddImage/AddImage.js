import React from 'react';

import Grid from '@material-ui/core/Grid';
import UploadImageForm from '../UploadImageForm/UploadImageForm';
import UploadImageDropBox from '../UploadImageDropBox/UploadImageDropBox';

const AddImage = () => (
  <Grid alignItems={'center'} direction={'row'} container>
    <Grid lg={6} item>
      <UploadImageForm />
    </Grid>
    <Grid lg={4} item>
      <UploadImageDropBox />
    </Grid>
  </Grid>
);

export default AddImage;
