'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

export default class Home extends Component {
  state: {
    isLoading: boolean,
    name: string,
  };

  constructor() {
    super();

    const identifierForVendor = 'FCA5A7BD-7E4B-4E37-A051-A8D8FC51D6EE';

    this.state = {
      isLoading: true,
      name: '',
      bg: require('../assets/img/home/bg.png'),
    };

    fetch(`http://api.hotvenueapp.com/device?identifierForVendor=${identifierForVendor}`)
      .then((res) => res.json())
      .then((res) => {
        const device = res[0];
        const location = device.location;
        const bg = location.urlFrame['2x'];

        this.setState({
          name: device.name,
          bg: { uri: bg },
        });

        Image.prefetch(bg)
          .then(() => {
            this.setState({
              isLoading: false,
            });
          });
      });
  }

  render() {
    return (
      <Image source={this.state.bg} style={styles.container}>
        <Spinner visible={this.state.isLoading}/>
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

