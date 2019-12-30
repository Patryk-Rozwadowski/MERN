import React from 'react';
import {compose} from 'redux';
import {NavLink, withRouter} from 'react-router-dom';
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
            <section className='images__container'>
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
                        <React.Fragment>
                            <SpinnerBuffer/>
                        </React.Fragment> : []
                }

            </section>
        );
    }
}

const mapStateToProps = (state, params) => {
    return {
        imagesData: getImages(state, params),
        isMounted: state.images.mounted,
        isLoaded: state.images.loaded
    };
};

const getImages = (state, params) => state.images.images.filter(img => img.creator === params.match.params.id);

export default compose(
    withRouter(
        connect(mapStateToProps, {images: fetchImagesRequest})(Images))
);