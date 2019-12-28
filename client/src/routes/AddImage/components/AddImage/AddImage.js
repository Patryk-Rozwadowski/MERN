import React from 'react';
import TextField from '@material-ui/core/TextField';

// TODO make input more reusable
class AddImage extends React.Component {

    render() {
        return (
            <section className='upload upload__container'>
                    <form method='POST' action='/uploadphoto' encType='multipart/form-data' className='upload__form'>
                        <h3 className='section__title'>Add photo</h3>
                        <TextField className='upload__input' label="Title"/>
                        <TextField className='upload__input' label="Description"/>
                        <TextField className='upload__input' label="Location"/>
                        <button type='submit' className='btn btn-info' label='upload'>Upload</button>
                    </form>
                <div className='upload__upload'>
                    <button class='btn btn-transparent'> Upload</button>
                </div>
            </section>
        );
    }
}

export default AddImage;