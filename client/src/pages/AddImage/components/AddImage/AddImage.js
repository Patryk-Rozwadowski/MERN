import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

import { addImage } from '../../../../redux/actions/images.actions';

import Grid from '@material-ui/core/Grid';
import Heading from '../../../../components/Heading/Heading';
import Button from '../../../../components/Button/Button';
import InputField from '../../../../components/InputField/InputField';

class AddImage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: uuid(),
      name: 'Patryk',
      title: '',
      description: '',
      location: ''
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitNewImage(this.state);
  };

  render() {
    return (
      <Grid alignItems={'center'} direction={'row'} container>
        <Grid lg={6} item>
          <form
            method='POST'
            onSubmit={this.handleSubmit}
            action='/uploadphoto'
            encType='multipart/form-data'
            className='upload__form'
          >
            <Heading color='black' type='h1'>
              Add image
            </Heading>
            <InputField
              name='title'
              id='title'
              value={this.state.title}
              onChange={this.handleChange}
              label='Title'
              lg={6}
              dataCy='title'
            />

            <InputField
              name='description'
              id='description'
              value={this.state.description}
              onChange={this.handleChange}
              label='Description'
              lg={6}
              dataCy='description'
            />

            <InputField
              name='location'
              id='location'
              value={this.state.location}
              onChange={this.handleChange}
              label='Location'
              lg={6}
              dataCy='location'
            />

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
              {' '}
              Upload
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { submitNewImage: addImage })(AddImage);
