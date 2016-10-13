'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

class Thanks extends Component {
  render() {
    return (
      <Image source={this.props.thanks} style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: null,
    height: null,
  },
});

function initialize(store) {
  return {
    thanks: store.initialize.thanks,
  };
}

export default connect(initialize)(Thanks);
