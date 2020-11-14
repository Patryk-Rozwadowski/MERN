import React from 'react';
import Button from '../../../../components/Button/Button';
import ButtonUpload from '../../../../components/ButtonUpload/ButtonUpload';

const UploadImageDropBox = () => (
  <div className='upload__upload'>
    <ButtonUpload id='image-upload' label='Choose your image' />
  </div>
);

export default UploadImageDropBox;
