import React from 'react';

import Feed from '../Feed'

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
        <Avatar>
          <img alt="" src="https://pbs.twimg.com/profile_images/1297574825129586690/9tFEIahx_400x400.jpg"></img>
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outline>Edit profile</EditButton>
        <h1>Gabriela Schlemper</h1>
        <h2>@gabschlemper</h2>

        <p>
          Front-end Junior
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Florianópolis, Brasil
          </li>
          <li>
            <CakeIcon/>
            March 24, 2000
          </li>
        </ul>

        <Followage>
          <span>
          Following <strong>74</strong>
          </span>
          <span>
            <strong>285 </strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  )
}

export default ProfilePage;