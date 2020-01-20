import React from 'react';
import Heading from "../../../../components/Heading/Heading";

const Home = () => (
  <section className='home'>
    <div className='f-center'>
      <Heading variant='title' type='h1' color='white'>Share your photos</Heading>
      <Heading variant='subtitle' type='h3' color='white'>Join for free!</Heading>
      <button className='btn btn-register'>Register</button>
    </div>
  </section>
);

export default Home;
