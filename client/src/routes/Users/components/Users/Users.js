import React from 'react';
import { useSelector } from 'react-redux';

import UsersList from '../UsersList';
//return <UsersList items={testUsers} />

class Users extends React.Component  {
    
    render() {
        return (
            <React.Fragment>
                <UsersList />
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);