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
          <img src='https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg'></img>
        </Avatar>

        <Content>
          <Header>
            <strong>GitHub</strong>
            <span>@github</span>
            <Dot />
            <time>Aug 21</time>
          </Header>

          <Description>Contagem regressiva para o primeiro GitHub ¡Presente! Em uma semana vamos reunir Hubbers brasileiros, falar sobre os projetos futuros do GitHub e conversar com desenvolvedores da comunidade brasileira. Faça parte do nosso Meetup! http://github.co/Presente</Description>

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