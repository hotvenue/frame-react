// @flow

import {
  INIT_FETCHING,
  INIT_FETCHING_PENDING,
  INIT_FETCHING_FULFILLED,
  INIT_FETCHING_REJECTED
} from '../constants';

export type InitData = {};
export type InitAction = {
  type: INIT_FETCHING | INIT_FETCHING_PENDING | INIT_FETCHING_FULFILLED | INIT_FETCHING_REJECTED;
  data: InitData;
};

export function fetchInitData(): InitAction {
  return {
    type: INIT_FETCHING,
    data: {},
  };
}
