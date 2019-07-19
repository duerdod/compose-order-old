import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import { ThemeProvider } from 'emotion-theming';
import Theme from './Components/Theme';
import Header from './Components/Page/Header';
import Nav from './Components/Nav';
import Products from './Components/Order/Products'; // Fetches products, puts them to "global" state
import OrderTable from './Components/OrderTable';
import { AppWrapper } from './App';
import ProductPage from './Components/ProductPage/ProductPage';
import LoginPage from './Components/Login/LoginPage';
// import AddProduct from './Components/Login/AddProduct';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

// const endpoint =
//   process.NODE_ENV === 'production'
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL_DEV;

const client = new ApolloClient({
  uri: 'https://compose-order-api.herokuapp.com',
  fetchOptions: {
    mode: 'cors'
  }
});

const ComposeOrder = props => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Products>
          <AppWrapper>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/" component={OrderTable} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/addproduct" component={AddProduct} /> */}
              <Route component={NotFound} />
            </Switch>
          </AppWrapper>
        </Products>
      </BrowserRouter>
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(<ComposeOrder />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
