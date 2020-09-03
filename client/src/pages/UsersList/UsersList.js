import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import UserCard from './components/UserCard/UserCard';
import {fetchUsersRequest} from '../../redux/actions/users.actions';
import SpinnerBuffer from '../../components/Spinner/SpinnerBuffer';

import {checkIfEmptyIsMounted, checkIsLoadedIsFetched} from '../../utils/checkIfReadyToMount';
import NavShared from '../../components/Nav/Nav';

const UsersList = ({
  allUsersArray,
  isComponentMounted,
  isDataFetched,
  fetchingAllUsersList
}) => {
  useEffect(() => {
    fetchingAllUsersList();
  }, [fetchingAllUsersList]);

  return (
    <>
      <NavShared variant='black' />
      <section data-cy='users-list-container' className='users__container'>
        {checkIsLoadedIsFetched(isComponentMounted, isDataFetched) ? (
          <div className='grid-3-row'>
            {allUsersArray.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                places={user.places}
                name={user.name}
                avatar={user.avatar}
                profileBg={user.profileBg}
                description={user.description}
              />
            ))}
          </div>
        ) : (
          <SpinnerBuffer variant='container' />
        )}

        {checkIfEmptyIsMounted(allUsersArray, isComponentMounted) && (
          <p>Users not found!</p>
        )}
      </section>
    </>
  );
};

const mapStateToProps = ({ usersReducer }) => {
  const { allUsersArray, isComponentMounted, isDataFetched } = usersReducer;
  return {
    allUsersArray,
    isComponentMounted,
    isDataFetched
  };
};

const mapDispatchToProps = dispatch => ({
  fetchingAllUsersList: id => dispatch(fetchUsersRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
