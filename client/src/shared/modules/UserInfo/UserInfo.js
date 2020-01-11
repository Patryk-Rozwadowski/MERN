import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '../../components/Avatar/Avatar';
import Text from '../../components/Text/Text';

const UserInfo = props => {
    const {
        profileBgPicture,
        avatarUrl,
        nick,
        accountType,
        userName,
        followersNumber,
        followingNumber,
        imagesNumber,
        placesNumber
    } = props;
    return (
        <section className='user-info'>
            <div style={{backgroundImage: `url(${profileBgPicture})`}} className='user-info__cover-photo'>
                <div className='gradient'>

                    <Grid container>
                        <Avatar alt='alt' avatarUrl={avatarUrl}/>

                        <Grid lg={11} item>
                            <Text variant='subtitle' color='white'>{nick}</Text>
                            <Grid container>
                                <Grid lg={9} item>
                                    <Text variant='text' color='white'>{accountType}</Text>
                                    <Text variant='text' color='white'>{userName}</Text>
                                    <Text variant='text' color='white'>{followersNumber} Followers</Text>
                                    <Text variant='text' color='white'>{followingNumber} Following</Text>
                                </Grid>

                                <Grid lg={3} item>
                                    <Text variant='text' color='white'>{imagesNumber} Images</Text>
                                    <Text variant='text' color='white'>{placesNumber} Places</Text>
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