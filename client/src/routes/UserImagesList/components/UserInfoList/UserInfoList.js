import React from 'react';
import {connect} from 'react-redux';

import {fetchUserInfoRequest} from '../../../../redux/actions/user.actions';

class UserInfoList extends React.Component {

    componentDidMount() {
        this.props.userInfo();
    }

    render() {
        return (
            <React.Fragment>
                {<div></div>
                }
            </React.Fragment>
        );
    }
}


export default connect(null, {userInfo: fetchUserInfoRequest})(UserInfoList);