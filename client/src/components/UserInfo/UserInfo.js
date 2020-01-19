import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '../Avatar/Avatar';
import Text from '../Text/Text';

const UserInfo = ({
  profileBgPicture,
  avatarUrl,
  nick,
  accountType,
  userName,
  followersNumber,
  followingNumber,
  imagesNumber,
  placesNumber
}) => {
  return (
    <section className='user-info'>
      <div
        data-cy='profile-background'
        style={{ backgroundImage: `url(${profileBgPicture})` }}
        className='user-info__cover-photo'
      >
        <div data-cy='user-profile-gradient' className='gradient'>
          <Grid container>
            <Avatar alt={`${nick}'s avatar`} avatarUrl={avatarUrl} />

            <Grid lg={11} item>
              <Text data-cy='nick' variant='subtitle' color='white'>
                {nick}
              </Text>
              <Grid container>
                <Grid lg={9} item>
                  <Text data-cy='account-type' variant='text' color='white'>
                    {accountType}
                  </Text>
                  <Text data-cy='user-name' variant='text' color='white'>
                    {userName}
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
