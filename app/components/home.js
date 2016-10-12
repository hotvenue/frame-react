'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class Home extends Component {
  render() {
    return (
      <Image source={this.state.frame} style={styles.container}>
        <Text>{DeviceInfo.getUniqueID()}</Text>
      </Image>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

