import React from 'react';

import './styles/Home.scss';
import ContainedButtons from '../../../../shared/Buttons/Buttons';

const HomeContainer = {
    HomeImage: {
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?moon.space,dark,grey,night)',
        overflow: 'hidden',
        flex: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
};

const Home = () => {
    return (
        <React.Fragment>
            <section style={HomeContainer.HomeImage} className='home__container'>
                <div className='home__title-wrapper'>
                    <h1 className='home__title'>Share your photos</h1>
                    <h2 className='home__subtitle'> Ok, not yet, but i'm working on it! </h2>
                    <ContainedButtons />
                </div>
            </section>
        </React.Fragment>
    )
};

export default Home;