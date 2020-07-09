import { createGlobalStyle } from 'styled-components';

import { color } from '../colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

  body, html, button, p, h1, h2, h3, h4, h5, h6, ul, li, button, input {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(p) => color('primary', p.theme.name)};
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    border: none;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
