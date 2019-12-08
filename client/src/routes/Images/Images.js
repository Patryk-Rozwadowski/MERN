import React from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchImagesRequest, imagesFetched } from '../../redux/reducers/images.reducer';

import UserImage from './components/UserImage';
// Todo: seperate into css files
const styles = {
    listContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

class Images extends React.Component {

    //const userId = useParams().userId;
    //const loadedImages = TEST_IMAGES.filter(image => image.creator === userId);

    componentDidMount() {
        this.props.images();
    }

    render() {
        const { imagesData, isMounted, isLoaded } = this.props

        return (
            <React.Fragment>
                {isMounted === true && isLoaded === true ?
                    <div>
                        {imagesData.map(image => <UserImage
                            key={image.id}
                            author={image.author}
                            id={image.id}
                            title={image.title}
                            name={image.name}
                            imageUrl={image.imageUrl}
                            description={image.description} />)}
                    </div> : []
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
                
            </React.Fragment>
        )}
}


const mapDispatchToProps = dispatch => {
    debugger
    return {
        images: () => dispatch(fetchImagesRequest())
    }
}

const mapStateToProps = state => {
    debugger
    return {
        imagesData: state.imagesReducer,
        isMounted: state.imagesReducer.mounted,
        isLoaded: state.imagesReducer.loaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);