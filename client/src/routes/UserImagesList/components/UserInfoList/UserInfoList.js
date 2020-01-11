import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchUserInfoRequest} from '../../../../redux/actions/user.actions';
import UserInfo from '../../../../shared/modules/UserInfo/UserInfo';

import {componentIsLoadedAndFetched} from '../../../../utils/componentIsLoadedAndFetched';

// @todo error handling
const UserInfoList = ({userProfileInformations, match, fetchuserProfileInformations}) => {

    useEffect(() => {
        const userId = match.params.id;
        fetchuserProfileInformations(userId);
    }, [fetchuserProfileInformations, match]);

    return (
        <React.Fragment>
            {
                componentIsLoadedAndFetched &&
                <React.Fragment>
                    {
                        userProfileInformations.map(user => <UserInfo
                            key={user.id}
                            nick={user.name}
                            avatarUrl={user.avatar}
                            userName={user.userName}
                            followersNumber={user.followersNumber}
                            followingNumber={user.following}
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

const mapStateToProps = state => {
    const {user, loaded, mounted} = state.userReducer;
    return {
        userProfileInformations: user,
        isMounted: mounted,
        isLoaded: loaded
    };
};

export default compose(
    withRouter(
        connect(mapStateToProps, {fetchuserProfileInformations: fetchUserInfoRequest})(UserInfoList))
);