import React from 'react';

import './styles/Home.scss';
import ContainedButtons from '../../../../shared/Buttons/Buttons';
import image1 from '../../../../assets/randomImg/photo1.jpg';
import image2 from '../../../../assets/randomImg/photo2.jpg';
import image3 from '../../../../assets/randomImg/photo3.jpg';
import image4 from '../../../../assets/randomImg/photo4.jpg';
import image5 from '../../../../assets/randomImg/photo5.jpg';
import image6 from '../../../../assets/randomImg/photo6.jpg';
import image7 from '../../../../assets/randomImg/photo7.jpg';
import image8 from '../../../../assets/randomImg/photo8.jpg';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            backgroundImage: `url(${image1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            className: 'fadeout',
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(() => this.setState({
            backgroundImage: `url(${this.randomPic()})`
        }), 6000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // TODO replace request to unsplash with pictures from mongoDB
    randomPic = () => {
        const arr = [image1, image2, image3, image4, image5, image6, image7, image8];
        return arr[Math.floor(arr.length * Math.random())]
    };

    render() {
        return (
            <React.Fragment>
                <section style={this.state} className='home__container'>
                    <div className='home__title-wrapper'>
                        <h2 className='home__title'>Share your photos</h2>
                        <h3 className='home__subtitle'> Ok, not yet, but i'm working on it! </h3>
                        <ContainedButtons/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;