import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text/Text';
const ButtonUpload = ({ id, label }) => {
  const [image, setImage] = useState();
  const [previewImageUrl, setPreviewImageUrl] = useState();

  function uploadImageHandler({ target }) {
    const { files } = target;
    if (files && files.length >= 1) {
      console.log(files);
      setImage(files[0]);
    }
  }

  useEffect(() => {
    if (!image) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(image);
    console.log(previewImageUrl);
  }, [image]);

  return (
    <>
      <input
        type='file'
        className='button-upload'
        id={`upload-image-${id}`}
        dataCy={`upload-file-${id}`}
        onChange={uploadImageHandler}
        accept='.jpg, .png, .jpeg'
        multiple
      />
      <label htmlFor={`upload-image-${id}`}>
        <FontAwesomeIcon icon={faUpload} color='white' />
        <Text color='white'>{label}</Text>
      </label>
      {previewImageUrl && <img src={previewImageUrl} alt='preview Image' />}
    </>
  );
};

export default ButtonUpload;
