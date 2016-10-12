'use strict';

import { INITIALIZING } from '../actions/types';
import type { Action } from '../actions/types';

export type State = {
  isInitialized: boolean;
  frame: ?string;
  thanks: ?string;
  watermark: ?string;
};

const initialState = {
  isInitialized: false,
  frame: require('../assets/img/home/bg.png'),
  thanks: null,
  watermark: null,
};

export function initialize(state: State = initialState, action = Action) {
  if (action.type === INITIALIZING) {
    return {
      isInitialized: true,
      frame: { uri: action.device.location.urlFrame['2x'] },
      thanks: { uri: action.device.location.urlFrameThanks['2x'] },
      watermark: { uri: action.device.location.urlWatermark['2x'] },
    }
  }

  return state;
}
