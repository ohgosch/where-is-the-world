import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { RouterPages } from './RouterPages';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Skeleton/Header';

const stateTemplate = {
  theme: localStorage.getItem('theme') || 'light',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...stateTemplate };
    localStorage.setItem('theme', stateTemplate.theme);

    this.changeTheme = (theme) => {
      const { theme: currentTheme } = this.state;
      let selectedTheme = theme;

      if (!selectedTheme) {
        if (currentTheme === 'light') selectedTheme = 'dark';
        else selectedTheme = 'light';
      }

      this.setState((state) => ({
        ...state,
        theme: selectedTheme,
      }));

      localStorage.setItem('theme', selectedTheme);
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={{ name: theme }}>
        <>
          <GlobalStyle />
          <Main>
            <BrowserRouter>
              <Header changeTheme={this.changeTheme} />
              <RouterPages />
            </BrowserRouter>
          </Main>
        </>
      </ThemeProvider>
    );
  }
}

const Main = styled.main`
  padding-bottom: 80px;
`;

export default App;
