'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <Image source={require('../assets/img/home/bg.png')} style={styles.container} />
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

