import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
          <Route path="/shop/:slug" />
          <Route path="/shop" />
          <Route path="/subscriptions" />
          <Route path="/subscribe" />
          <Route path="/our-coffee" />
          <Route path="/about" />
          <Route path="/wholesale" />
          <Route path="/contact" />
          <Route path="/faq" />
          <Route path="/terms" />
          <Route path="/privacy" />
          <Route path="/shipping" />
          <Route path="/blog/:slug" />
          <Route path="/blog" />
        </Switch>
);
