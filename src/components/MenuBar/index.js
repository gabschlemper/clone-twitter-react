import React from 'react';

import Button from '../Button';

import { 
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>
        
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        
        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>
        
        <MenuButton>
          <ProfileIcon className="active"/>
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img alt="" src="https://pbs.twimg.com/profile_images/1297574825129586690/9tFEIahx_400x400.jpg"></img>
        </Avatar>

        <ProfileData>
          <strong>Gabriela Schlemper</strong>
          <span>@gabschlemper</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  )
}

export default MenuBar;