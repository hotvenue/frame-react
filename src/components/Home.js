import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

class Home extends Component {
  render() {
    const {
      container,
      image,
    } = styles;

    return (
      <TouchableHighlight onPress={this._onPressButton} style={container}>
        <Image source={this.props.frame} style={image} />
      </TouchableHighlight>
    );
  }

  _onPressButton = () => {
    this.props.navigator.push({ id: 'camera' });
  }
}

const mapStateToProps = state => ({ initData: state.initData });

export default connect(mapStateToProps)(Home);
