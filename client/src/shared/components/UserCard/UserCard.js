import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

import Avatar from '../Avatar/Avatar';
import Heading from '../Text/Heading';

const UserCard = ({id, avatar, name, profileBg, description}) => {

    return (
        <div className='userCard'>
            <div style={{backgroundImage: `url(${profileBg})`}} className='userCard__background'
                 alt={`${name} profile background`}>

                <Grid justify={'center'} container>
                    <Avatar className='avatar__container' avatarUrl={avatar} alt={`${name} profile avatar`}/>

                </Grid>

            </div>

            <Grid justify={'center'} container>
                <Grid className='text-container' item>
                    <Heading variant='subtitle' color='black' type='h2'>
                        {name}
                    </Heading>
                    <Text>
                        {description ? description : 'No description provided!'}
                    </Text>
                </Grid>
            </Grid>

            <div className='userCard__links__container'>
                <Grid direction={'row'} justify={'center'} alignItems={'center'} container>
                    <Grid lg={4} className='text-align-c' item>
                        <Link to={`/${id}/images`}>
                            <Text dataCy={'user-images'}> Images </Text>
                        </Link>
                    </Grid>

                    <Grid lg={4} className='text-align-c' item>
                        <Link to={`/${id}/places`}>
                            <Text dataCy={'user-places'}> Places </Text>
                        </Link>
                    </Grid>

                    <Grid lg={4} className='text-align-c' item>
                        <Link to={`/${id}/profile`}>
                            <Text dataCy={'user-profile'}> Profile </Text>
                        </Link>
                    </Grid>

                </Grid>

            </div>

        </div>
    );
};

UserCard.defaultProps = {
    description: 'No description!',
    name: 'Unnamed'
};

UserCard.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default UserCard;