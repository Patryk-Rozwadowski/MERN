import React from 'react';
import starSVG from '../../assets/star.svg';
import commentSVG from '../../assets/comment.svg';
import Grid from '@material-ui/core/Grid';

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
        <Grid direction='row' container>
          <Grid container m={3} alignItems='center' direction='row'>
            <Grid xs={8} item>
              <Grid container direction='column'>
                <div className='image-card__image-info'>
                  <h2 className='image-card__title'>
                    {title ? title : 'unknown'}
                  </h2>
                </div>
                <h2 className='image-card__author'>
                  by {author ? author : 'unknown'}
                </h2>
              </Grid>
            </Grid>

            <Grid xs={4} item>
              <Grid container direction='row'>
                <Grid xs={6} item>
                  <Grid container alignContent='center' justify='center'>
                    <img
                      className='image-card__icon'
                      src={starSVG}
                      alt='star icon'
                    />
                    <p className='image-card__icon-stats'>24</p>
                  </Grid>
                </Grid>
                <Grid xs={6} item>
                  <Grid container alignContent='center' justify='center'>
                    <img
                      className='image-card__icon'
                      src={commentSVG}
                      alt='comment icon'
                    />
                    <p className='image-card__icon-stats'>2</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserImageCard;
