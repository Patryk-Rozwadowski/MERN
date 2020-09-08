import React from 'react';

const ImageCardPure = ({ imageUrl, children }) => {
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
      {children}
    </div>
  );
};
export default ImageCardPure;
