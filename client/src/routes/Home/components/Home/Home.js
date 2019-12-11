import React from 'react';

import './styles/Home.scss';

const HomeContainer = {
    HomeImage: {
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?trees,wood,dark)',
        overflow: 'hidden',
        flex: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
}

const Home = props => {
    return (
        <React.Fragment>
            <section style={HomeContainer.HomeImage} className='home__container'>
                <p>Home working</p>
            </section>
        </React.Fragment>
    )
};

export default Home;