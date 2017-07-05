// @flow

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
