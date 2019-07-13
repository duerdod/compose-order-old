import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Page/Header';
import StartPage, { AppWrapper } from './StartPage';
import { ThemeProvider } from 'emotion-theming';
import Theme from './Components/Theme';
import ProductPage from './Components/ProductPage/ProductPage';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

const ComposeOrder = props => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter history={props.history}>
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route component={NotFound} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<ComposeOrder />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
