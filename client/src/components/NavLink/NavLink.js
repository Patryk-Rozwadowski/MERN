import React from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';

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

export default NavLink;
