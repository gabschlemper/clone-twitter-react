import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
 } from './styles';

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <List 
            title="You might like"
            elements={[
              <FollowSuggestion name="May Schlemper" nickname="@mayschlemper"/>,
              <FollowSuggestion name="Julia schlemps" nickname="@julia101020"/>,
              <FollowSuggestion name="Karol" nickname="@Schlemperkarol"/>
            ]}
          />
          <List 
            title="What’s happening"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List 
            title="What’s happening"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List 
            title="What’s happening"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;