import React from 'react';

import ImageCardPure from './Components/ImageCardPure/ImageCardPure';
import ImageCardFeed from './Components/ImageCardFeed/ImageCardFeed';

const UserImageCard = ({ imageUrl, author, title }) => {
  return (
    <ImageCardPure imageUrl={imageUrl}>
      <ImageCardFeed author={author} title={title} />
    </ImageCardPure>
  );
};

export default UserImageCard;
