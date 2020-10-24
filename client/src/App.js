import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Backbone from './components/Backbone';

import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import ProductPage from './pages/Product';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import NewsletterPage from './pages/Newsletter';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import ShippingPage from './pages/Shipping';
import BlogPage from './pages/Blog';
import FAQPage from './pages/FAQ';

import './App.css';

const App = () => {
  return (
    <Backbone>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:model/:slug" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/subscribe" component={NewsletterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/blog" component={BlogPage} />
          {/*<Route path="/wholesale" component={WholesalePage} />
          <Route path="/blog/:slug" component={ArticlePage} />
  <Route path="/subscriptions" component={SubscriptionPage} />*/}
        </Switch>
    </Backbone>
  );
}

export default App;
