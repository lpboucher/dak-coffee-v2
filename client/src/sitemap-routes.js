import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    <Route path="/shop/:model/:slug" />
    <Route path="/shop" />
    <Route path="/subscribe" />
    <Route path="/about" />
    <Route path="/contact" />
    <Route path="/faq" />
    <Route path="/terms" />
    <Route path="/privacy" />
    <Route path="/shipping" />
    <Route path="/blog" />
  </Switch>
);
