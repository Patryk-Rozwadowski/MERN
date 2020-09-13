import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUserInfoRequest } from '../../../../redux/actions/user.actions';
import { fetchUserImagesRequest } from '../../../../redux/actions/images.actions';
import UserInfo from '../../../../components/UserInfo/UserInfo';

import { checkIsLoadedIsFetched } from '../../../../utils/checkIfReadyToMount';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

const UserInfoList = ({
  userInformations,
  match,
  fetchUserImages,
  fetchuserProfileInformations,
  isDataFetched,
  isComponentMounted
}) => {
  useEffect(() => {
    const userId = match.params.id;
    fetchuserProfileInformations(userId);
    fetchUserImages(userId);
  }, [fetchuserProfileInformations, match, fetchUserImages]);

  return (
    <>
      {checkIsLoadedIsFetched(
        isComponentMounted,
        isDataFetched,
        userInformations
      ) ? (
        <UserInfo userInformations={userInformations} />
      ) : (
        <SpinnerBuffer />
      )}
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  const { userInformations, isComponentMounted, isDataFetched } = userReducer;
  return {
    userInformations,
    isComponentMounted,
    isDataFetched
  };
};

const mapDispatchToProps = dispatch => ({
  fetchuserProfileInformations: id => dispatch(fetchUserInfoRequest(id)),
  fetchUserImages: id => dispatch(fetchUserImagesRequest(id))
});

export default compose(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfoList))
);
