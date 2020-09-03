import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {'Copyright © '}
    <Link color='inherit' href='https://github.com/Patryk-Rozwadowski'>
      Patryk Rozwadowski
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);
export default Copyright;
