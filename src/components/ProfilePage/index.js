import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon, 
  Followage,
  EditButton
 } from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>Editar Perfil</EditButton>
        <h1>Gabriela Schlemper</h1>
        <h2>@gabschlemper</h2>

        <p>
          Front-end 
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Florianópolis, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido em 24 mar de 2000
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>74</strong>
          </span>
          <span>
            <strong>285 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;