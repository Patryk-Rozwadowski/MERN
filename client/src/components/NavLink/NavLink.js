import React from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NavLink = ({
  children,
  dataCy,
  to = '/',
  exact = true,
  ...otherProps
}) => {
  return (
    <>
      <NavLinkRouter
        to={to}
        activeClassName='link-active'
        className='link'
        data-cy={`nav-link-${dataCy}`}
        exact={exact}
        {...otherProps}
      >
        {children}
      </NavLinkRouter>
    </>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired
};

export default NavLink;
