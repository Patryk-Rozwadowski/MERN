import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchImagesRequest} from '../../../../redux/reducers/images.reducer';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import UserImage from '../UserImage/UserImage';

class Images extends React.Component {

    // const userId = useParams().userId;
    // const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);

    componentDidMount() {
        this.props.images();
    }

    render() {
        const {imagesData, isMounted, isLoaded} = this.props;

        return (
            <section className='feed-container'>
                {
                    isMounted === true && isLoaded === true ?
                        <React.Fragment>
                            {
                                imagesData.map(image => <UserImage
                                    key={image.id}
                                    author={image.author}
                                    id={image.id}
                                    title={image.title}
                                    name={image.name}
                                    imageUrl={image.imageUrl}
                                    description={image.description}/>)
                            }
                        </React.Fragment> : []
                }

                {
                    imagesData.length === 0 && isMounted === true ?
                        <div>
                            <h2>Not found any images yet!</h2>
                            <NavLink to='/addimage'>Maybe add one?</NavLink>
                        </div> : []
                }

                {
                    isMounted === false && isLoaded === false ?
                        <div>
                            <SpinnerBuffer variant='container'/>
                        </div> : []
                }

            </section>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        images: () => dispatch(fetchImagesRequest())
    };
};

const mapStateToProps = state => {
    return {
        imagesData: state.images.images,
        isMounted: state.images.mounted,
        isLoaded: state.images.loaded
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);