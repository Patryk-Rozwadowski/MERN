import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchImagesRequest } from '../../../redux/reducers/images.reducer';

import '../styles/Images.scss';
import UserImage from './UserImage';



class Images extends React.Component {

    //const userId = useParams().userId;
    //const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);

    componentDidMount() {
        this.props.images();
    }

    render() {
        const { imagesData, isMounted, isLoaded } = this.props

        return (
            <div className='images__container'>
                {
                    isMounted === true && isLoaded === true ?
                        <React.Fragment>
                            {imagesData.map(image => <UserImage
                                key={image.id}
                                author={image.author}
                                id={image.id}
                                title={image.title}
                                name={image.name}
                                imageUrl={image.imageUrl}
                                description={image.description} />)}
                        </React.Fragment> : []
                }

                {
                    imagesData.length === 0 && isMounted === true || imagesData.length === undefined && isMounted === true ?
                        <div>
                            <h2>Not found any images yet!</h2>
                            <NavLink to='/addimage'>Maybe add one?</NavLink>
                        </div> : []
                }

                {
                    isMounted === false && isLoaded === false ?
                        <div>
                            <h2>Loading...</h2>
                        </div> : []
                }

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        images: () => dispatch(fetchImagesRequest())
    }
}

const mapStateToProps = state => {
    return {
        imagesData: state.imagesReducer.images,
        isMounted: state.imagesReducer.mounted,
        isLoaded: state.imagesReducer.loaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);