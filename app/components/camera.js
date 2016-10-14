'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Camera from 'react-native-camera';

class Cam extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    setImmediate(() => this._setText3());
  }

  _setText3() {
    this.setState({ text: 3 });

    setTimeout(() => this._setText2(), 6000);
  }

  _setText2() {
    this.setState({ text: 2 });

    setTimeout(() => this._setText1(), 1000);
  }

  _setText1() {
    this.setState({ text: 1 });

    setTimeout(() => this._setTextShakeIt(), 1000);
  }

  _setTextShakeIt() {
    this.setState({ text: 'Shake it!!' });

    setTimeout(() => this.props.navigator.push({ id: 'thanks' }), 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          captureTarget={Camera.constants.CaptureTarget.temp}
          type={Camera.constants.Type.front}>
          <Text style={styles.text}>{ this.state.text }</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 72,
    color: 'white',
  },
});

function initialize(store) {
  return {};
}

export default connect(initialize)(Cam);
