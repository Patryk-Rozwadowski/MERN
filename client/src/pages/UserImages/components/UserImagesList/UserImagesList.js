import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchAllUsersImages,
  fetchUserImagesRequest
} from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';
import UserImageCard from '../../../../components/UserImage/UserImageCard';
import {
  checkIfEmptyIsMounted,
  checkIsLoadedIsFetched
} from '../../../../utils/checkIfReadyToMount';
import NotFoundData from '../../../../components/NotFoundData/NotFoundData';

const UserImagesList = ({
  imagesListAllUsers,
  fetchAllUsersImages,
  isComponentMounted,
  isDataFetched,
  match
}) => {
  useEffect(() => {
    const userId = match.params.id;
    fetchAllUsersImages();
  }, [fetchAllUsersImages, match.params.id]);

  return (
    <>
      {checkIsLoadedIsFetched(
        isComponentMounted,
        isDataFetched,
        imagesListAllUsers
      ) ? (
        <section data-cy='user-images-list' className='images'>
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
        </section>
      ) : (
        <SpinnerBuffer />
      )}

      {checkIfEmptyIsMounted(imagesListAllUsers, isComponentMounted) && (
        <NotFoundData text='Not found any images' />
      )}
    </>
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
  fetchAllUsersImages: () => dispatch(fetchAllUsersImages())
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(UserImagesList))
);
