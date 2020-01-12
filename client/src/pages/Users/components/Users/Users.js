import React from 'react';
import {connect} from 'react-redux';

import UserCard from '../../../../components/UserCard/UserCard';
import {fetchUsersRequest} from '../../../../redux/actions/users.actions';
import SpinnerBuffer from '../../../../components/Spinner/SpinnerBuffer';

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
                                usersData.map(user => <UserCard
                                    key={user.id}
                                    id={user.id}
                                    places={user.places}
                                    name={user.name}
                                    avatar={user.avatar}
                                    profileBg={user.profileBg}
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

const mapStateToProps = ({usersReducer}) => {
    const {allUsersArray, isComponentMounted, isDataFetched} = usersReducer;
    return {
        usersData: allUsersArray,
        isMounted: isComponentMounted,
        isLoaded: isDataFetched
    };
};

const mapDispatchToProps = dispatch => ({
    users: id => dispatch(fetchUsersRequest(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);