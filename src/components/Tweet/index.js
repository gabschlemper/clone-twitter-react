import React from 'react';

import { 
  Container,
  Retweeted,
  Icon,
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
        <Icon />
        Você retweeted
      </Retweeted>

      <Body>
        <Avatar>
          <img alt="" src='https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg'></img>
        </Avatar>

        <Content>
          <Header>
            <strong>GitHub</strong>
            <span>@github</span>
            <Dot />
            <time>Aug 21</time>
          </Header>

          <Description>Have you built your GitHub Profile README yet? Check out this video on how to build your profile, share with us, and get some inspiration from other great profiles. What will you showcase?</Description>

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
              63
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  )
};

export default Tweet;