'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import Spinner from 'react-native-loading-spinner-overlay';

import { initialize } from '../actions';
import Home from './home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialize());
  }

  render() {
    if (!this.props.isInitialized) {
      return (
        <Spinner/>
      );
    }

    return (
      <Home />
    );
  }
}

module.exports = connect((store) => {
  return {
    isInitialized: store.isInitialized,
  };
})(App);
