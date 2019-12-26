import React from 'react';
import TextField from '@material-ui/core/TextField';
import './styles/AddImage.scss';
import MButtons from '../../../../shared/Buttons/Buttons';

// TODO make input more reusable
class AddImage extends React.Component {

    render() {
        return (
            <React.Fragment>
                    <div className='form__container'>
                        <h3 className='section__title'>Add photo</h3>
                        <form method='POST' action='/uploadphoto' encType='multipart/form-data' noValidate
                              autoComplete="off">
                            <TextField className='input__addImage' label="Title"/>
                            <TextField className='input__addImage' label="Description"/>
                            <TextField className='input__addImage' label="Location"/>
                            <MButtons>Upload</MButtons>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}

export default AddImage;