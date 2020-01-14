import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { fetchAllUsersImages } from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import UserImageCard from '../../../../components/UserImage/UserImageCard';

import {
  checkIfEmptyIsMounted,
  checkIsLoadedIsFetched
} from '../../../../utils/checkIfReadyToMount';

const AllImagesList = ({
  fetchingAllUsersImages,
  imagesListAllUsers,
  isComponentMounted,
  isDataFetched
}) => {
  useEffect(() => {
    fetchingAllUsersImages();
  }, [fetchingAllUsersImages]);

  return (
    <section className='images__container'>
      {checkIsLoadedIsFetched(isComponentMounted, isDataFetched) ? (
        <React.Fragment>
          {imagesListAllUsers.map(image => (
            <UserImageCard
              key={image.id}
              author={image.author}
              id={image.id}
              title={image.title}
              name={image.name}
              imageUrl={image.imageUrl}
              description={image.description}
            />
          ))}
        </React.Fragment>
      ) : (
        <SpinnerBuffer />
      )}

      {checkIfEmptyIsMounted(imagesListAllUsers, isComponentMounted) && (
        <div data-cy='no-images-found-user'>
          <h2>Not found any images yet!</h2>
          <NavLink to='/add-image'>Maybe add one?</NavLink>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = ({ imagesReducer }) => {
  const {
    imagesListAllUsers,
    isComponentMounted,
    isDataFetched
  } = imagesReducer;
  return {
    imagesListAllUsers,
    isComponentMounted,
    isDataFetched
  };
};

const mapDispatchToProps = dispatch => ({
  fetchingAllUsersImages: () => dispatch(fetchAllUsersImages())
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(AllImagesList))
);
