import React from 'react';
import Nav from './components/Nav/Nav';

const NavShared = ({ variant = '' }) => {
  return <Nav variant={variant} />;
};

export default NavShared;
