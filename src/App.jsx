import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouterPages } from './RouterPages';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Skeleton/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <BrowserRouter>
          <Header />
          <RouterPages />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
