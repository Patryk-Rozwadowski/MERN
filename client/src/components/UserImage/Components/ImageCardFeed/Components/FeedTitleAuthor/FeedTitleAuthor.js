import Grid from '@material-ui/core/Grid';
import React from 'react';

const FeedTitleAuthor = ({ title, author }) => (
  <Grid xs={8} item>
    <Grid container direction='column'>
      <div className='image-card__image-info'>
        <h4 className='image-card__title'>{title ? title : 'unknown'}</h4>
      </div>
      <h2 className='image-card__author'>by {author ? author : 'unknown'}</h2>
    </Grid>
  </Grid>
);

export default FeedTitleAuthor;
