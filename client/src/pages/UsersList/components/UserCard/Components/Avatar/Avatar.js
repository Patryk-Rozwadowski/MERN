import Avatar from '../../../../../../components/Avatar/Avatar';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const UserCardAvatar = ({ avatarUrl, name }) => (
  <Grid justify={'center'} container>
    <Avatar
      className='avatar__container'
      avatarUrl={avatarUrl}
      alt={`${name} profile avatar`}
    />
  </Grid>
);

export default UserCardAvatar;
