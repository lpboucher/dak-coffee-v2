import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {responsiveStoreEnhancer} from 'redux-responsive';
import LogRocket from 'logrocket';
import {StripeProvider} from 'react-stripe-elements';
import { I18nextProvider } from "react-i18next";
import { Grommet } from 'grommet';
import * as serviceWorker from './serviceWorker';

import App from './App';
import reducers from './reducers';
import i18n from './i18n';
import { DakTheme } from './theme';

import ScrollToTop from './components/utils/Routes/ScrollToTop';

if (process.env.NODE_ENV !== 'development') {
    LogRocket.init('3khpto/dak-coffee-roasters');
}

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}

const middleware = process.env.NODE_ENV !== 'production' ?
[require('redux-immutable-state-invariant').default(), reduxThunk, LogRocket.reduxMiddleware()] :
[reduxThunk, LogRocket.reduxMiddleware()];

const store = createStore(reducers, {}, composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(...middleware)));
ReactDOM.render(
<Provider store={store}>
    <Router>
        <ScrollToTop>
            <I18nextProvider i18n={i18n}>
                <StripeProvider apiKey="pk_test_hN24eKK8d78KlAVlKAcll8eu">
                    <Grommet theme={DakTheme}>
                        <App />
                    </Grommet>
                </StripeProvider>
            </I18nextProvider>
        </ScrollToTop>
    </Router>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
