import React from 'react';

import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

const NavShared = ({ variant = '' }) => (
  <nav data-cy='nav' className={`nav nav-${variant}`}>
    <div className='nav__links'>
      <NavLink dataCy='logo' exact to='/'>
        <Logo />
      </NavLink>

      <NavLink dataCy='home' exact to='/'>
        Home
      </NavLink>

      <NavLink dataCy='users-lists' exact to='/users-list'>
        Users
      </NavLink>

      <NavLink dataCy='images' exact to='/images'>
        Images
      </NavLink>

      <NavLink dataCy='add-image' exact to='/add-image'>
        Add image
      </NavLink>
    </div>

    <NavLink dataCy='login' exact to='/sign-in'>
      Login
    </NavLink>

    <NavLink dataCy='register' className='link' exact to='/sign-up'>
      Register
    </NavLink>
  </nav>
);

export default NavShared;
