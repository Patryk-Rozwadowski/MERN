import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchAllUsersImages} from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import UserImageCard from '../../../../components/UserImage/UserImageCard';
import NotFoundData from '../../../../components/NotFoundData/NotFoundData';
import {checkIfEmptyIsMounted, checkIsLoadedIsFetched} from '../../../../utils/checkIfReadyToMount';

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
    <>
      {checkIsLoadedIsFetched(isComponentMounted, isDataFetched) ? (
        <section className='images__container'>
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
        <NotFoundData text='No images found!' link='Maybe add one?' />
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
  fetchingAllUsersImages: () => dispatch(fetchAllUsersImages())
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(AllImagesList))
);
