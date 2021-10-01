import { ReactElement } from 'react';
import { GlobalStyle } from './globalStyle';
import MainPage from '@page/Main';
import Footer from "@comp/Footer";

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;