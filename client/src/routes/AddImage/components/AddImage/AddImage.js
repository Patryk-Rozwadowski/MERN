import React from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

class AddImage extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = e => {
        this.setState({value: e.target.value});
        console.log(this.state.value);
    };

    handleSubmit = e => {
        //this.props.submitNewImage;
    };

    render() {
        return (
            <section className='upload upload__container'>
                    <form method='POST' action='/uploadphoto' encType='multipart/form-data' className='upload__form'>
                        <h3 className='section__title'>Add photo</h3>
                        <TextField onChange={this.handleChange} className='upload__input' label="Title"/>
                        <TextField className='upload__input' label="Description"/>
                        <TextField className='upload__input' label="Location"/>
                        <button type='submit' className='btn btn-info' label='upload'>Upload</button>
                    </form>
                <div className='upload__upload'>
                    <button className='btn btn-transparent'> Upload</button>
                </div>
            </section>
        );
    }
}

export default connect(null, null)(AddImage);