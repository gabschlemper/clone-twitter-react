import React from 'react';

import MenuBar from '../MenuBar';
import { Container, Wrapper } from './styles';

import Main from '../Main';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar /> 
        <Main /> 
        {/* <SideBar />  */}
      </Wrapper>
    </Container>  
  )
}

export default Layout;