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
    <React.Fragment>
      <NavLinkRouter
        to={to}
        activeClassName={''}
        className='link'
        data-cy={`nav-link-${dataCy}`}
        exact={exact}
        {...otherProps}
      >
        {children}
      </NavLinkRouter>
    </React.Fragment>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired
};

export default NavLink;
