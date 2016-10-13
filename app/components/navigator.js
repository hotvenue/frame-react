'use strict';

import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { connect } from 'react-redux';

import Home from './home';

export default class Nav extends Component {
  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        initialRoute={{ id: 'home' }}
        renderScene={ this.navigatorRenderScene }
       />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'home':
        return (<Home navigator={navigator} />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
