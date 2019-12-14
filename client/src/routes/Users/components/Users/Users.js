import React from 'react';
import {connect} from 'react-redux';

import UserItems from '../UserItems/UserItems';
import {fetchUsersRequest} from "../../../../redux/reducers/users.reducer";
import SpinnerBuffer from "../../../../components/Spinner/SpinnerBuffer";

import './styles/Users.scss';
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
                        <React.Fragment>
                            {
                                usersData.map(user => <UserItems
                                    key={user.id}
                                    id={user.id}
                                    places={user.places}
                                    name={user.name}
                                    image={user.image}
                                    description={user.description}
                                />)
                            }
                        </React.Fragment> : []
                }

                {
                    isMounted === false && isLoaded === false ?
                        <React.Fragment>
                            <SpinnerBuffer variant='container'/>
                        </React.Fragment> : []
                }
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        users: () => dispatch(fetchUsersRequest())
    }
};

const mapStateToProps = state => {
    return {
        usersData: state.usersReducer.users,
        isMounted: state.usersReducer.mounted,
        isLoaded: state.usersReducer.loaded
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);