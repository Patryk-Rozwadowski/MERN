import React from 'react';
import {PropTypes} from 'prop-types';

const headers = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

const Heading = ({ type, variant, color, children, ...otherProps }) =>
  React.createElement(
    headers[type],
    {
      className: `section__${variant}-${color}`,
      ...otherProps
    },
    children
  );

Heading.defaultProps = {
  variant: 'title',
  color: 'white'
};

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default Heading;
