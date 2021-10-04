import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import MainPage from '@page/Main';
import Footer from "@comp/Footer";
import CardGame from '@page/CardGame';
import LineGame from '@page/LineGame';
import CardTutorial from '@page/CardTutorial';
import LineTutorial from '@page/LineTutorial';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/card" component={CardGame} />
      <Route path="/line" component={LineGame} />
      <Route path="/ctu" component={CardTutorial} />
      <Route path="/ltu" component={LineTutorial} />
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