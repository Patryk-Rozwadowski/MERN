import React from 'react';
import Heading from '../../../../components/Heading/Heading';
import Button from '../../../../components/Button/Button';

const Home = () => (
  <section data-cy='home' className='home'>
    <div className='f-center'>
      <Heading variant='title' type='h1' color='white'>
        Share your photos
      </Heading>
      <Heading variant='subtitle' type='h3' color='white'>
        Join for free!
      </Heading>
      <Button dataCy='register' lg variant='register' children='Register' />
    </div>
  </section>
);

export default Home;
