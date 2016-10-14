'use strict';

import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';

import Home from './home';
import Cam from './camera';
import Thanks from './thanks';

export default class Nav extends Component {
  render() {
    return (
      <Navigator
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

      case 'camera':
        return (<Cam navigator={navigator} />);

      case 'thanks':
        return (<Thanks navigator={navigator} />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
