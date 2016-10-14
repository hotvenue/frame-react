'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)} style={{ flex: 1 }}>
        <Image source={this.props.frame} style={styles.container} />
      </TouchableHighlight>
    );
  }

  _onPressButton() {
    this.props.navigator.push({ id: 'camera' });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

function initialize(store) {
  return {
    frame: store.initialize.frame,
  };
}

export default connect(initialize)(Home);
