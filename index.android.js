'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class HotVenueFrame extends Component {
  render() {
    return (
      <Image source={require('./app/assets/img/home/bg.png')} style={styles.container} />
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

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HotVenueFrame', () => HotVenueFrame);
