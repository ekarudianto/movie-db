import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MovieSearch from './app/containers/MovieSearch';
import ListContainer from './app/containers/ListContainer';
import { GlobalStyle } from './GlobalStyle';

const AppContainer = styled.div`
  margin: auto;
  max-width: 600px;
  width: 100%;
`;

class App extends PureComponent {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <MovieSearch />
        <ListContainer />
      </AppContainer>
    );
  }
}

export default App;
