import React from 'react';

import Logo from '../../../../components/Logo/Logo';
import NavLink from '../../../../components/NavLink/NavLink';

const Nav = ({variant}) => {
    return (
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

                <NavLink dataCy='addimage' exact to='/addimage'>
                    Add image
                </NavLink>
            </div>


            <NavLink cy='login' exact to='/signin'>
                Login
            </NavLink>

            <NavLink cy='nav__login' className='link' exact to='/signup'>
                Register
            </NavLink>

        </nav>
    );
};

export default Nav;