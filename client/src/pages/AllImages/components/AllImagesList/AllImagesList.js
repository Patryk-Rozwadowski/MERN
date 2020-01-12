import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

import {fetchAllUsersImages} from '../../../../redux/actions/images.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import UserImageCard from '../../../../components/UserImage/UserImageCard';

import {checkIfEmptyIsMounted, checkIsLoadedIsFetched} from '../../../../utils/checkIfReadyToMount';

const AllImagesList = ({ images, imagesData, isMounted, isLoaded }) => {
  useEffect(() => {
    images();
  }, [images]);

  return (
    <section className="images__container">
      {checkIsLoadedIsFetched ? (
        <React.Fragment>
          {imagesData.map(image => (
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

      {checkIfEmptyIsMounted && (
        <React.Fragment>
          <h2>Not found any images yet!</h2>
          <NavLink to="/addimage">Maybe add one?</NavLink>
        </React.Fragment>
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
    imagesData: imagesListAllUsers,
    isMounted: isComponentMounted,
    isLoaded: isDataFetched
  };
};

const mapDispatchToProps = dispatch => ({
  images: () => dispatch(fetchAllUsersImages())
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(AllImagesList))
);