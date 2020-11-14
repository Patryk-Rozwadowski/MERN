import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text/Text';
const ButtonUpload = ({ id, label }) => (
  <>
    <input
      type='file'
      className='button-upload'
      id={`upload-image-${id}`}
      dataCy={`upload-file-${id}`}
    />
    <label htmlFor={`upload-image-${id}`}>
      <FontAwesomeIcon icon={faUpload} color='white' />
      <Text color='white'>{label}</Text>
    </label>
  </>
);

export default ButtonUpload;
