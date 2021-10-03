import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import MainPage from '@page/Main';
import Footer from "@comp/Footer";
import CardPage from '@page/Card';
import LinePage from '@page/Line';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/card" component={CardPage} />
      <Route path="/line" component={LinePage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Root />
      <Footer />
    </>
  );
}

export default App;