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
        <Grid direction={'row'} container>
          <div className='image-card__image-info'>
            <h2 className='image-card__title'>{title ? title : 'unknown'}</h2>
          </div>

          <Grid container direction='row'>
            <Grid xs={8} item>
              <h2 className='image-card__author'>
                by {author ? author : 'unknown'}
              </h2>
            </Grid>

            <Grid xs={4} item>
              <div className='image-card__icons'>
                <Grid container direction={'row'}>
                  <Grid xs={6} item>
                    <Grid container alignContent='center' justify='center'>
                      <img
                        className='image-card__icon'
                        src={starSVG}
                        alt='star icon'
                      />
                      <p className='image-card__icon-text'>24</p>
                    </Grid>
                  </Grid>
                  <Grid xs={6} item>
                    <Grid container alignContent='center' justify='center'>
                      <img
                        className='image-card__icon'
                        src={commentSVG}
                        alt='star icon'
                      />
                      <p className='image-card__icon-text'>2</p>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserImageCard;
