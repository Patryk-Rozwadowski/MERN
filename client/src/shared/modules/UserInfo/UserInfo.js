import React from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '../../components/Avatar/Avatar';
import Text from '../../components/Text/Text';

const UserInfo = props =>
    <section className='user-info'>
        <div style={{backgroundImage: `url(${props.profileBg})`}} className='user-info__cover-photo'>
            <div className='gradient'>
                <Grid direction='column' container>
                    <Grid lg={4} item>
                        <Avatar alt='alt' avatarUrl={props.avatarUrl}/>
                        <Text variant='subtitle' color={'white'}>{props.nick}</Text>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid lg={10} item>
                        <Text variant='text' color='white'>{props.accountype}</Text>
                        <Text variant='text' color='white'>{props.username}</Text>
                        <Text variant='text' color='white'>{props.followers} Followers</Text>
                        <Text variant='text' color='white'>{props.following} Following</Text>
                    </Grid>

                    <Grid lg={2} item>
                        <Text variant='text' color='white'>{props.imageslen} Images</Text>
                        <Text variant='text' color='white'>{props.placeslen} Places</Text>
                    </Grid>
                </Grid>
            </div>
        </div>
    </section>;



export default UserInfo;