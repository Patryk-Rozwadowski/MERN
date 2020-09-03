import React, {useState} from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';

import {addImage} from '../../../../redux/actions/images.actions';

import Grid from '@material-ui/core/Grid';
import Heading from '../../../../components/Heading/Heading';
import Button from '../../../../components/Button/Button';
import InputField from '../../../../components/InputField/InputField';


const AddImage = () => {
  const [user, setUser] = useState({
    id: uuid(),
    name: 'Patryk',
    title: '',
    description: '',
    location: ''
  });

  const handleChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.submitNewImage(this.state);
  };

  const inputFields = {
    title: {
      name: 'title',
      id: 'input-title',
      value: user.title,
      onchange: handleChange,
      label: 'Title',
      lg: 6,
      dataCy: 'title'
    },
    description: {
      name: 'description',
      id: 'input-description',
      value: user.description,
      onchange: handleChange,
      label: 'description',
      lg: 6,
      dataCy: 'description'
    },
    location: {
      name: 'location',
      id: 'input-location',
      value: user.location,
      onchange: handleChange,
      label: 'description',
      lg: 6,
      dataCy: 'description'
    }
  }

  return (
      <Grid alignItems={'center'} direction={'row'} container>
        <Grid lg={6} item>
          <form
              method='POST'
              onSubmit={handleSubmit}
              action='/uploadphoto'
              encType='multipart/form-data'
              className='upload__form'
          >
            <Heading color='black' type='h2'>
              Add image
            </Heading>

            {Object.values(inputFields).map(input =>
              <InputField
                          name={input.name}
                          id={input.id}
                          value={input.value}
                          onChange={input.onchange}
                          label={input.label}
                          lg={input.lg}
                          dataCy={input.dataCy}
                />
            )};

            <Button
                type='submit'
                variant={'info'}
                dataCy={'submit-upload-file'}
                lg={6}
            >
              Upload
            </Button>
          </form>
        </Grid>
        <Grid lg={4} item>
          <div className='upload__upload'>
            <Button
                type='submit'
                variant={'transparent'}
                dataCy={'upload-file'}
            >
              Upload
            </Button>
          </div>
        </Grid>
      </Grid>
  )
}

export default connect(null, { submitNewImage: addImage })(AddImage);
