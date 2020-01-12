import React from 'react';
import AddImage from './components/AddImage/AddImage';
import NavShared from '../../components/Nav';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

const AddImageRoute = () => {
    return (
        <React.Fragment>
                <NavShared variant='black'/>
            <SectionContainer>
                <AddImage/>
            </SectionContainer>
        </React.Fragment>
    )
};

export default AddImageRoute;