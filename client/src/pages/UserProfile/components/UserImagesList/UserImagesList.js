import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { fetchUserImagesRequest } from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';
import UserImageCard from '../../../../components/UserImage/UserImageCard';
import {
  checkIfEmptyIsMounted,
  checkIsLoadedIsFetched
} from '../../../../utils/checkIfReadyToMount';

const UserImagesList = ({
  imagesUser,
  fetchUserImages,
  isComponentMounted,
  isDataFetched,
  match
}) => {
  useEffect(() => {
    const userId = match.params.id;
    fetchUserImages(userId);
  }, [fetchUserImages, match.params.id]);

  return (
    <section data-cy='user-images-list' className='grid-3-row'>
      {checkIsLoadedIsFetched(isComponentMounted, isDataFetched) ? (
        <React.Fragment>
          {imagesUser.map(image => (
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

      {checkIfEmptyIsMounted(imagesUser, isComponentMounted) && (
        <div data-cy='warrning-images-not-found'>
          <h2>Not found any images yet!</h2>
          <NavLink to='/add-image'>Maybe add one?</NavLink>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = ({ imagesReducer }) => {
  const { imagesUser, isComponentMounted, isDataFetched } = imagesReducer;
  return {
    imagesUser,
    isComponentMounted,
    isDataFetched
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserImages: id => dispatch(fetchUserImagesRequest(id))
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(UserImagesList))
);
