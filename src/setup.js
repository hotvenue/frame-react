// @flow

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';
import Loading from './components/Loading';

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

const Root = () => (
  <Provider store={store}>
    <Loading />
  </Provider>
);

export default Root;
