import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Text from '../../../../components/Text/Text';
import React from 'react';

const UserCardLinks = ({ id }) => (
  <div className='userCard__links__container'>
    <Grid direction={'row'} justify={'center'} alignItems={'center'} container>
      <Grid lg={4} className='text-align-c' item>
        <Link data-cy={`user-images-${id}`} to={`/${id}/images`}>
          <Text> Images </Text>
        </Link>
      </Grid>

      <Grid lg={4} className='text-align-c' item>
        <Link data-cy={`user-places-${id}`} to={`/${id}/places`}>
          <Text> Places </Text>
        </Link>
      </Grid>

      <Grid lg={4} className='text-align-c' item>
        <Link data-cy={`user-profile-${id}`} to={`/${id}/profile`}>
          <Text> Profile </Text>
        </Link>
      </Grid>
    </Grid>
  </div>
);

export default UserCardLinks;
