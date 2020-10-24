import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Backbone from './new/components/Backbone';

import HomePage from './new/pages/Home';
import ShopPage from './new/pages/Shop';
import ProductPage from './new/pages/Product';
import ContactPage from './new/pages/Contact';
import AboutPage from './new/pages/About';
import NewsletterPage from './new/pages/Newsletter';
import PrivacyPage from './new/pages/Privacy';
import TermsPage from './new/pages/Terms';
import ShippingPage from './new/pages/Shipping';
import BlogPage from './new/pages/Blog';
import FAQPage from './new/pages/FAQ';

import SubscriptionPage from './components/pages/Subscriptions';
import WholesalePage from './components/pages/Wholesale';
import ArticlePage from './components/pages/Article';

import './App.css';

const App = () => {
  return (
    <Backbone>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:model/:slug" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/subscriptions" component={SubscriptionPage} />
          <Route path="/subscribe" component={NewsletterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/wholesale" component={WholesalePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/blog/:slug" component={ArticlePage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
    </Backbone>
  );
}

export default App;
