import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

import {fetchImagesRequest} from '../../../../redux/actions/images.actions';
import {getImages} from '../../../../redux/selectors/images.selectors';
import SpinnerBuffer from '../../../../shared/components/Spinner/SpinnerBuffer';

import UserImageCard from '../../../../shared/components/UserImage/UserImageCard';

class UserImagesList extends React.Component {

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
                                imagesData.map(image => <UserImageCard
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
export default compose(
    withRouter(
        connect(mapStateToProps, {images: fetchImagesRequest})(UserImagesList))
);