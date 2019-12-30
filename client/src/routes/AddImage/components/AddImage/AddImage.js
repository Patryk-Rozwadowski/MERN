import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addImage} from '../../../../redux/actions/images.actions';

import TextField from '@material-ui/core/TextField';

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
            <section className='upload upload__container'>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data' className='upload__form'>
                    <h3 className='section__title'>Add photo</h3>
                    <TextField
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                        className='upload__input'
                        label="Title"/>

                    <TextField
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        className='upload__input'
                        label="Description"/>

                    <TextField
                        name='location'
                        value={this.state.location}
                        onChange={this.handleChange}
                        className='upload__input'
                        label="Location"/>

                    <button onClick={this.handleSubmit} className='btn btn-info' label='upload'>Upload</button>
                </form>
                <div className='upload__upload'>
                    <button className='btn btn-transparent'> Upload</button>
                </div>
            </section>
        );
    }
}

// method='POST' action='/uploadphoto'
export default connect(null, {submitNewImage: addImage})(AddImage);