import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchUserInfoRequest} from '../../../../redux/actions/user.actions';
import {fetchUserImagesRequest} from '../../../../redux/actions/images.actions';
import UserInfo from '../../../../components/UserInfo/UserInfo';

import {checkIsLoadedIsFetched} from '../../../../utils/checkIfReadyToMount';

// @todo error handling
const UserInfoList = ({userInformations, match, fetchUserImages, fetchuserProfileInformations}) => {

    useEffect(() => {
        const userId = match.params.id;
        fetchuserProfileInformations(userId);
        fetchUserImages(userId);
    }, [fetchuserProfileInformations, match]);

    return (
        <React.Fragment>
            {
                checkIsLoadedIsFetched &&
                <React.Fragment>
                    {
                        userInformations.map(user => <UserInfo
                            key={user.id}
                            nick={user.name}
                            avatarUrl={user.avatar}
                            userName={user.userName}
                            followersNumber={user.followersNumber}
                            followingNumber={user.followingNumber}
                            imagesNumber={user.places.length}
                            placesNumber={user.places.length}
                            accountType={user.accountType}
                            profileBgPicture={user.profileBg}/>)
                    }
                </React.Fragment>
            }
        </React.Fragment>

    );
};

const mapStateToProps = ({userReducer}) => {
    const {userInformations, isComponentMounted, isDataFetched} = userReducer;
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
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(UserInfoList))
);