import React from 'react';
import AddImage from './components/AddImage/AddImage';
import NavShared from '../../components/Nav/Nav';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

const AddImageRoute = () =>
    <>
      <NavShared variant='black' />
      <SectionContainer>
        <AddImage />
      </SectionContainer>
    </>

export default AddImageRoute;
