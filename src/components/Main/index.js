import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Gabriela Schlemper</strong>
          <span>874 Tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage/> */}
      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}

export default Main;