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
  }
`