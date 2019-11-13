import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/layouts/PageLayout';

import HomePage from './components/pages/Home';
import ShopPage from './components/pages/Shop';
import ProductPage from './components/pages/Product';
import SubscriptionPage from './components/pages/Subscriptions';
import CartPage from './components/pages/Cart';
import SubscribePage from './components/pages/Newsletter';
import CoffeePage from './components/pages/Coffee';
import AboutPage from './components/pages/About';
import WholesalePage from './components/pages/Wholesale';
import ContactPage from './components/pages/Contact';
import FAQPage from './components/pages/terms/FAQ';
import TermsPage from './components/pages/terms/Terms';
import PrivacyPage from './components/pages/terms/Privacy';
import BlogPage from './components/pages/Blog';
import ArticlePage from './components/pages/Article';

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
          <Route path="/our-coffee" component={CoffeePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/wholesale" component={WholesalePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/blog/:slug" component={ArticlePage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
    </Layout>
  );
}

export default App;
