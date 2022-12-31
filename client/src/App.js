import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';

import Backbone from './components/Backbone';
import './App.css';
import './Snipcart.css';

const HomePage = lazy(() => import('./pages/Home'));
const ShopPage = lazy(() => import('./pages/Shop'));
const ProductPage = lazy(() => import('./pages/Product'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));
const SustainabilityPage = lazy(() => import('./pages/Sustainability'));
const NewsletterPage = lazy(() => import('./pages/Newsletter'));
const PrivacyPage = lazy(() => import('./pages/Privacy'));
const TermsPage = lazy(() => import('./pages/Terms'));
const ShippingPage = lazy(() => import('./pages/Shipping'));
const BlogPage = lazy(() => import('./pages/Blog'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const WholesalePage = lazy(() => import('./pages/Wholesale'));

const App = () => {
  return (
    <Backbone>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:model/:slug" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/subscribe" component={NewsletterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/sustainability" component={SustainabilityPage} />
          <Route path="/contact" component={ContactPage} />
         {/*<Route path="/faq" component={FAQPage} /> */}
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/wholesale" component={WholesalePage} />
          {/*<Route path="/blog/:slug" component={ArticlePage} />
  <Route path="/subscriptions" component={SubscriptionPage} />*/}
        </Switch>
      </Suspense>
    </Backbone>
  );
}

export default App;
