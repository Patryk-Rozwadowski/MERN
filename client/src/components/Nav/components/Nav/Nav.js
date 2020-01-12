import React from 'react';

import Logo from '../../../Logo/Logo';
import NavLink from '../../../NavLink/NavLink';
// @todo fix reusable
const Nav = ({variant}) =>
    <nav className={`nav nav-${variant}`}>
        <div className='nav__links'>
            <NavLink dataCy='logo' exact to='/'>
                <Logo/>
            </NavLink>

            <NavLink dataCy='home' exact to='/'>
                Home
            </NavLink>

            <NavLink dataCy='users' exact to='/users'>
                Users
            </NavLink>

            <NavLink dataCy='images' exact to='/images'>
                Images
            </NavLink>

            <NavLink dataCy='add-image' exact to='/addimage'>
                Add image
            </NavLink>
        </div>


        <NavLink cy='login' exact to='/signin'>
            Login
        </NavLink>

        <NavLink cy='nav__login' className='link' exact to='/signup'>
            Register
        </NavLink>

    </nav>;

export default Nav;