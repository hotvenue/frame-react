'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

class Thanks extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigator.push({ id: 'home' }), 3000);
  }

  render() {
    return (
      <Image source={this.props.thanks} style={styles.container} />
    );
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
    thanks: store.initialize.thanks,
  };
}

export default connect(initialize)(Thanks);
