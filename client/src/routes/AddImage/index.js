import React from 'react';
import AddImage from './components/AddImage/AddImage'
import NavShared from "../../shared/Nav";

const AddImageRoute = () => {
    return (
        <React.Fragment>
            <NavShared variant='black'/>
            <AddImage/>
        </React.Fragment>
    )
};

export default AddImageRoute;