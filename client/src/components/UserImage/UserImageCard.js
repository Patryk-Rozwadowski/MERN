import React from 'react';

const UserImageCard = ({ imageUrl, author, title }) => {
  let img = new Image();
  img.src = imageUrl;
  const sizeRatio = 3;
  return (
    <div
      className='image-card'
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: img.width / sizeRatio,
        height: img.height / sizeRatio
      }}
    >
      <div className='image-card__feed'>
          
        <div className='image-card__title'>
          <h2 className='image-card__title-text'>
            {title ? title : 'unknown'}
          </h2>
        </div>
        <div className='image-card__description'>
          <h2 className='image-card__author'>{author ? author : 'unknown'}</h2>
        </div>

        <p className='image-card__info__element'> 5 Faves </p>
        <p className='image-card__info__element'> 2 Comments </p>
        <p className='image-card__info__element'> 1601 Views </p>
      </div>
    </div>
  );
};

export default UserImageCard;
