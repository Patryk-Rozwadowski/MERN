import React from 'react';
import { PropTypes } from 'prop-types';

import { Link as LinkRouter } from 'react-router-dom';

const Link = ({ children, color, to, dataCy }) => (
  <LinkRouter
    to={to}
    className={`link (${color} ? ${`link-${color}`} : null)`}
    data-cy={`link-${dataCy}`}
  >
    {children}
  </LinkRouter>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Link;
