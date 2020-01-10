import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchUserInfoRequest} from '../../../../redux/actions/user.actions';
import UserInfo from '../../../../shared/modules/UserInfo/UserInfo';

class UserInfoList extends React.Component {

    componentDidMount() {
        this.props.userInfo(this.props.match.params.id);
    }

    render() {
        const {userData, isMounted, isLoaded} = this.props;

        return (
            <React.Fragment>
                {
                    isMounted === true && isLoaded === true ?
                        <React.Fragment>
                            {
                                userData.map(user => <UserInfo
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
                        </React.Fragment> : []
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user.user,
        isMounted: state.user.mounted,
        isLoaded: state.user.loaded
    };
};

export default compose(
    withRouter(
        connect(mapStateToProps, {userInfo: fetchUserInfoRequest})(UserInfoList))
);