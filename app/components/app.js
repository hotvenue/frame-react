'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import Spinner from 'react-native-loading-spinner-overlay';

import actions from '../actions';
import Nav from './navigator';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.initialize());
  }

  render() {
    if (!this.props.isInitialized) {
      return (
        <Spinner visible={!this.props.isInitialized} />
      );
    }

    return (
      <Nav />
    );
  }
}

function initialize(store) {
  return {
    isInitialized: store.initialize.isInitialized,
  };
}
export default connect(initialize)(App);
