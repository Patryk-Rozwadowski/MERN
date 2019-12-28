import React from 'react';
import TextField from '@material-ui/core/TextField';
import MButtons from '../../../../shared/components/Buttons/Buttons';

// TODO make input more reusable
class AddImage extends React.Component {

    render() {
        return (
            <section className='upload upload__container feed-container'>
                    <form method='POST' action='/uploadphoto' encType='multipart/form-data' className='upload__form'>
                        <h3 className='section__title'>Add photo</h3>
                        <TextField className='upload__input' label="Title"/>
                        <TextField className='upload__input' label="Description"/>
                        <TextField className='upload__input' label="Location"/>
                        <input type='submit' className='btn btn__info' label='upload'></input>
                    </form>
                <div className='upload__upload'>
                    <button> Upload</button>
                </div>
            </section>
        );
    }
}

export default AddImage;