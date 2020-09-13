import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '../Avatar/Avatar';
import Text from '../Text/Text';

const UserInfo = ({
  userInformations: {
    profileBg,
    avatar,
    name,
    accountType,
    followersNumber,
    followingNumber,
    imagesNumber,
    placesNumber
  }
}) => {
  // @todo switch for email show
  return (
    <section className='user-info'>
      <div
        data-cy='profile-background'
        style={{ backgroundImage: `url(${profileBg})` }}
        className='user-info__cover-photo'
      >
        <div data-cy='user-profile-gradient' className='gradient'>
          <Grid container>
            <Avatar alt={`${name}'s avatar`} avatarUrl={avatar} />

            <Grid lg={11} item>
              <Text data-cy='nick' variant='subtitle' color='white'>
                {name}
              </Text>
              <Grid container>
                <Grid lg={9} item>
                  <Text data-cy='account-type' variant='text' color='white'>
                    {accountType}
                  </Text>
                  <Text data-cy='user-name' variant='text' color='white'>
                    {name}
                  </Text>
                  <Text data-cy='followers-number' variant='text' color='white'>
                    {followersNumber} Followers
                  </Text>
                  <Text data-cy='following-number' variant='text' color='white'>
                    {followingNumber} Following
                  </Text>
                </Grid>

                <Grid lg={3} item>
                  <Text data-cy='images-number' variant='text' color='white'>
                    {imagesNumber} Images
                  </Text>
                  <Text data-cy='places-number' variant='text' color='white'>
                    {placesNumber} Places
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
