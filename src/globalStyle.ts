import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Ubuntu', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    position: relative;

    --page-height: calc(100vh - 100px);
    --background-gray: #F3F3F3;
    --mustard: #FFB938;
    --black: #333333;
    --white: #FFFFFF;

    background-color: var(--background-gray);
  }
  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
  }
`