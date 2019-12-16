import React from 'react';
import ComponentContainer from "../../../../shared/Container/Container";
import TextField from '@material-ui/core/TextField';
import './styles/AddImage.scss';
// TODO make input more reusable
class AddImage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ComponentContainer>
                    <div className='form__container'>
                        <form noValidate autoComplete="off">
                            <TextField className='input__addImage' label="Name"/>
                            <TextField className='input__addImage' label="Description"/>
                            <TextField className='input__addImage' label="Standard"/>
                            <TextField className='input__addImage' label="Standard"/>
                        </form>
                    </div>
                </ComponentContainer>
            </React.Fragment>
        )
    }
}

export default AddImage;