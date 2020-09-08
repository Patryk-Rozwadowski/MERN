import React from 'react';
import Grid from '@material-ui/core/Grid';
import starSVG from '../../../../../../assets/star.svg';
import commentSVG from '../../../../../../assets/comment.svg';

const FeedIcons = () => (
  <Grid xs={4} item>
    <Grid container direction='row'>
      <Grid xs={6} item>
        <Grid container alignContent='center' justify='center'>
          <img className='image-card__icon' src={starSVG} alt='star icon' />
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
);

export default FeedIcons;
