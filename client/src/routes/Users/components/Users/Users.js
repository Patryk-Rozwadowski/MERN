import React from 'react';
import {connect} from 'react-redux';

import UserItems from '../UserItems/UserItems';
import {fetchUsersRequest} from '../../../../redux/actions/users.actions';
import SpinnerBuffer from '../../../../shared/components/Spinner/SpinnerBuffer';

// @todo error messages
class Users extends React.Component {

    componentDidMount() {
        this.props.users();
    }

    render() {
        const {usersData, isMounted, isLoaded} = this.props;

        return (
            <section className='users__container'>
                {
                    isMounted === true && isLoaded === true ?
                        <div className='grid-3-row'>
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
                    usersData.length === 0 && isMounted === true && isLoaded === true ?
                        <React.Fragment>
                            <p>Users not found!</p>
                        </React.Fragment> : []
                }

            </section>
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