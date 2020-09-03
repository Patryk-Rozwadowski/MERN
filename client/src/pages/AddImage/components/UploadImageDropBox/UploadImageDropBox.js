import Button from "../../../../components/Button/Button";
import React from "react";

const UploadImageDropBox = () =>
    <div className='upload__upload'>
        <Button
            type='submit'
            variant={'transparent'}
            dataCy={'upload-file'}
        >
            Upload
        </Button>
    </div>


export default UploadImageDropBox;
