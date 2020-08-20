import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content, 
  Header, 
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
 } from './styles';

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>21 de agosto</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
          <Status>
              <CommentIcon />
              13
            </Status>
            <Status>
              <RetweetIcon />
              21
            </Status>
            <Status>
              <LikeIcon />
              975
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  )
};

export default Tweet;