import React from 'react';
import {PropTypes} from 'prop-types';
import UserCardAvatar from './Components/Avatar/Avatar';
import AvatarBackground from '../AvatarBackground/AvatarBackground';
import UserCardDescription from '../UserCardDescription/UserCardDescription';
import UserCardLinks from '../UserCardLinks/UserCardLinks';

const UserCard = ({ id, avatar, name, profileBg, description }) => (
  <div data-cy={`user-card-${id}`} className='userCard'>
    <AvatarBackground profileBg={profileBg}>
      <UserCardAvatar avatarUrl={avatar} />
    </AvatarBackground>

    <UserCardDescription name={name} description={description} />
    <UserCardLinks id={id} />
  </div>
);

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default UserCard;
