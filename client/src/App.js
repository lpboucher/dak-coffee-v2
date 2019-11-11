import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/layouts/PageLayout';

import HomePage from './components/pages/Home';
import ShopPage from './components/pages/Shop';
import ProductPage from './components/pages/Product';
import SubscriptionPage from './components/pages/Subscriptions';
import CartPage from './components/pages/Cart';
import SubscribePage from './components/pages/Newsletter';

import './App.css';

const App = () => {
  return (
    <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:slug" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/subscriptions" component={SubscriptionPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/subscribe" component={SubscribePage} />
        </Switch>
    </Layout>
  );
}

export default App;
