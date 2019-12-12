import React from 'react';

import './styles/Home.scss';
import ContainedButtons from '../../../../shared/Buttons/Buttons';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
                   backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?dark,space,moon,grey',
                   overflow: 'hidden',
                   flex: 1,
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat',
            }
        }

    componentDidMount = () => {
        this.interval = setInterval(() =>  this.setState({
            backgroundImage: `url(https://source.unsplash.com/random/1600x900/?${this.randomPic()})`
        }), 8000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // TODO replace request to unsplash with pictures from mongoDB
    randomPic = () => {
        const arr = ['moon', 'space', 'dark', 'grey', 'building', 'stars', 'sky'];
        return arr[Math.floor(arr.length * Math.random())]
    }

    render() {
        return (
            <React.Fragment>
                <section style={this.state} className='home__container'>
                    <div className='home__title-wrapper'>
                        <h1 className='home__title'>Share your photos</h1>
                        <h2 className='home__subtitle'> Ok, not yet, but i'm working on it! </h2>
                        <ContainedButtons />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;