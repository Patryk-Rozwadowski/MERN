import Heading from "../../../../components/Heading/Heading";
import InputField from "../../../../components/InputField/InputField";
import Button from "../../../../components/Button/Button";
import React, {useState} from "react";
import uuid from "uuid";
import {connect} from "react-redux";
import {addImage} from "../../../../redux/actions/images.actions";


const UploadImageForm = () => {
    // @todo Connect redux with upload action
    const [newImage, uploadNewImage] = useState({
        id: uuid(),
        name: 'Patryk',
        title: '',
        description: '',
        location: ''
    });

    const handleChange = e => {
        const value = e.target.value;
        uploadNewImage({...newImage,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        uploadNewImage(newImage);
    };

    const inputFields = {
        title: {
            name: 'title',
            id: 'input-title',
            value: newImage.title,
            onchange: handleChange,
            label: 'Title',
            lg: 6,
            dataCy: 'title'
        },
        description: {
            name: 'description',
            id: 'input-description',
            value: newImage.description,
            onchange: handleChange,
            label: 'description',
            lg: 6,
            dataCy: 'description'
        },
        location: {
            name: 'location',
            id: 'input-location',
            value: newImage.location,
            onchange: handleChange,
            label: 'Location',
            lg: 6,
            dataCy: 'location'
        }
    }

    return <form
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
}


export default connect(null, { uploadNewImage: addImage })(UploadImageForm);

