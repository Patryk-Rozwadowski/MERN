import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

import {fetchUserImagesRequest} from '../../../../redux/actions/images.actions';

import SpinnerBuffer from '../../../../shared/components/Spinner/SpinnerBuffer';
import UserImageCard from '../../../../shared/components/UserImage/UserImageCard';

// @todo seperate into smaller pieces
class UserImagesList extends React.Component {

    componentDidMount() {
        this.props.images(this.props.match.params.id);
    }

    render() {
        const {imagesData, isMounted, isLoaded} = this.props;

        return (
            <section className='grid-3-row'>

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
                    imagesData.length === 0 && isMounted === true && isLoaded === true ?
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

const mapStateToProps = (state) => {
    return {
        imagesData: state.images.images,
        isMounted: state.images.mounted,
        isLoaded: state.images.loaded
    };
};
export default compose(
    withRouter(
        connect(mapStateToProps, {images: fetchUserImagesRequest})(UserImagesList))
);