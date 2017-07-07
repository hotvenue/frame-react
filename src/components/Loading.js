// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppLoading } from 'expo';

import Home from './Home';
import { fetchInitData } from '../actions/init';

class Loading extends Component {
  static propTypes = {
    fetchInitData: PropTypes.func.isRequired,
    initData: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchInitData();
  }

  render() {
    if (!this.props.initData) {
      return (
        <AppLoading />
      );
    }

    return (
      <Home />
    );
  }
}

const mapStateToProps = state => ({ initData: state.initReducer.initData });
const mapDispatchToProps = dispatch => ({ fetchInitData: () => dispatch(fetchInitData()) });

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
