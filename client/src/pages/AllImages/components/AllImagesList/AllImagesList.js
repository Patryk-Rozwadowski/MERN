import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

import {fetchAllUsersImages} from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import UserImageCard from '../../../../components/UserImage/UserImageCard';

class AllImagesList extends React.Component {

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

const mapStateToProps = ({imagesReducer}) => {
    const {imagesListAllUsers, isComponentMounted, isDataFetched} = imagesReducer;
    return {
        imagesData: imagesListAllUsers,
        isMounted: isComponentMounted,
        isLoaded: isDataFetched
    };
};

const mapDispatchToProps = dispatch => ({
    images: () => dispatch(fetchAllUsersImages())
});

export default compose(
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(AllImagesList))
);