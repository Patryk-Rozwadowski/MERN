import React from 'react';
import AddImage from './components/AddImage/AddImage';
import NavShared from '../../shared/modules/Nav';
import SectionContainer from '../../shared/components/SectionContainer/SectionContainer';

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