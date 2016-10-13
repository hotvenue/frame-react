'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import DeviceInfo from 'react-native-device-info';

class Home extends Component {
  render() {
    return (
      <Image source={this.props.frame} style={styles.container} />
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
    frame: store.initialize.frame,
    thanks: store.initialize.thanks,
    watermark: store.initialize.watermark,
  };
}

export default connect(initialize)(Home);

