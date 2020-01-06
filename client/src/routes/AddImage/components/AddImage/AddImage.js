import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';

import {addImage} from '../../../../redux/actions/images.actions';

import Grid from '@material-ui/core/Grid';
import Button from '../../../../shared/components/Button/Button';
import InputField from '../../../../shared/components/InputField/InputField';

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitNewImage(this.state);
    };

    render() {
        return (

            <Grid direction={'row'} container>
                <Grid item lg={6} item>

                    <form method='POST' onSubmit={this.handleSubmit} action='/uploadphoto'
                          encType='multipart/form-data'
                          className='upload__form'>

                        <h3 className='section__title'>Add photo</h3>
                        <InputField
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            label="Title"
                            dataCy='title'/>

                        <InputField
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            label="Description"
                            dataCy='description'/>

                        <InputField
                            name='location'
                            value={this.state.location}
                            onChange={this.handleChange}
                            label="Location"
                            dataCy='location'/>

                        <Button
                            type='submit'
                            variant={'info'}
                            dataCy={'submit-upload-file'}>
                            Upload
                        </Button>
                    </form>
                </Grid>
                <Grid alignContent={'center'} lg={6} item>
                    <div className='upload__upload'>
                        <Button
                            type='submit'
                            variant={'transparent'}
                            dataCy={'upload-file'}> Upload
                        </Button>
                    </div>
                </Grid>
            </Grid>

        );
    }
}

export default connect(null, {submitNewImage: addImage})(AddImage);