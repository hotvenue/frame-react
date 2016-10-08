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
    };

    fetch(`http://api.hotvenueapp.com/device?identifierForVendor=${identifierForVendor}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          isLoading: false,
          name: res[0].name,
        });
      });
  }

  render() {
    return (
      <Image source={require('../assets/img/home/bg.png')} style={styles.container}>
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

