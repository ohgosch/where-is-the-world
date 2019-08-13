import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouterPages } from './RouterPages';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Skeleton/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <RouterPages />
      </BrowserRouter>
    </>
  );
}

export default App;
