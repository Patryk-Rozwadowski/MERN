import React from 'react';
import AddImage from './components/AddImage/AddImage';
import NavShared from '../../shared/modules/Nav';
import SectionContainer from '../../shared/components/SectionContainer/SectionContainer';

const AddImageRoute = () => {
    return (
        <React.Fragment>
            <SectionContainer>
                <NavShared variant='black'/>
                <AddImage/>
            </SectionContainer>
        </React.Fragment>
    )
};

export default AddImageRoute;