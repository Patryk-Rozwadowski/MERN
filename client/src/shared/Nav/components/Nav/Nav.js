import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    return (
        <nav className={`nav nav-${props.variant}`}>
            <div className='nav__links'>
                <NavLink cy='nav__logo' activeClassName={''} className='link' exact to='/'>
                    ToToo
                </NavLink>

                <NavLink cy='nav__home' className='link' exact to='/'>
                    Home
                </NavLink>

                <NavLink cy='nav__users' className='link' exact to='/users'>
                    Users
                </NavLink>

                <NavLink cy='nav__images' className='link' exact to='/images'>
                    Images
                </NavLink>

                <NavLink cy='nav__addimage' className='link' exact to='/addimage'>
                    Add image
                </NavLink>
            </div>


            <NavLink cy='nav__login' className='link' exact to='/signin'>
                Login
            </NavLink>

            <NavLink cy='nav__login' className='link' exact to='/signup'>
                Register
            </NavLink>

        </nav>
    );
};

export default Nav;