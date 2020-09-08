import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedIcons from './Components/FeedIcons/FeedIcons';
import FeedTitleAuthor from './Components/FeedTitleAuthor/FeedTitleAuthor';

const ImageCardFeed = ({ author, title }) => (
  <div className='image-card__feed'>
    <Grid direction='row' container>
      <Grid container m={3} alignItems='center' direction='row'>
        <FeedTitleAuthor author={author} title={title} />
        <FeedIcons />
      </Grid>
    </Grid>
  </div>
);

export default ImageCardFeed;
