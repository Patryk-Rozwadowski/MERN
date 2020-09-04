import React from 'react';
import Heading from '../Heading/Heading';
import {NavLink} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const NotFoundData = ({ text, link }) => (
  <div className='f-center modal-container' data-cy='no-images-found-user'>
    <Heading type='h2' color='black'>
      {text}
    </Heading>

      {link && <NavLink className='section__subtitle-black' to='/add-image'>
          {link}
      </NavLink>}

  </div>
);

NotFoundData.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default NotFoundData;
