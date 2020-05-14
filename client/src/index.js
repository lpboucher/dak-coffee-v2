import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { I18nextProvider } from "react-i18next";
import { Grommet } from 'grommet';
import TagManager from 'react-gtm-module';

import * as serviceWorker from './serviceWorker';

import App from './App';
import reducers from './reducers';
import i18n from './i18n';
import { DakTheme } from './theme';

import ScrollToTop from './components/utils/Routes/ScrollToTop';

TagManager.initialize({gtmId: 'GTM-PMXJ7MF'})

const middleware = process.env.NODE_ENV !== 'production' ?
[require('redux-immutable-state-invariant').default(), reduxThunk] :
[reduxThunk];

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(...middleware)));

// Tell react-snap how to save Redux state
window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState()
});

const rootElement = document.getElementById("root");
const AppRoot = <Provider store={store}>
              <Router>
                  <ScrollToTop>
                      <I18nextProvider i18n={i18n}>
                          <Grommet theme={DakTheme}>
                              <App />
                          </Grommet>
                      </I18nextProvider>
                  </ScrollToTop>
              </Router>
            </Provider>
if (rootElement.hasChildNodes()) {
  hydrate(AppRoot, rootElement);
} else {
  render(AppRoot, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
