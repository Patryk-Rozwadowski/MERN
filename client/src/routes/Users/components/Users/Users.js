import React from 'react';
import {connect} from 'react-redux';

import UserItems from '../UserItems/UserItems';
import {fetchUsersRequest} from '../../../../redux/reducers/users.reducer';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

import './styles/Users.scss';

// @todo messages
class Users extends React.Component {

    componentDidMount() {
        this.props.users();
    }

    render() {
        const {usersData, isMounted, isLoaded} = this.props;

        return (
            <React.Fragment>
                {
                    isMounted === true && isLoaded === true ?
                        <div className='users__container'>
                            {
                                usersData.map(user => <UserItems
                                    key={user.id}
                                    id={user.id}
                                    places={user.places}
                                    name={user.name}
                                    avatar={user.avatar}
                                    description={user.description}
                                />)
                            }
                        </div> : []
                }

                {
                    isMounted === false && isLoaded === false ?
                        <React.Fragment>
                            <SpinnerBuffer variant='container'/>
                        </React.Fragment> : []
                }

                {
                    usersData.length === 0 ?
                        <React.Fragment>
                            <p>Users not found!</p>
                        </React.Fragment> : []
                }

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersData: state.users.users,
        isMounted: state.users.mounted,
        isLoaded: state.users.loaded
    };
};

export default connect(mapStateToProps, {users: fetchUsersRequest})(Users);