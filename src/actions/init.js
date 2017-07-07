// @flow

import {
  INIT_FETCHING,
  INIT_FETCHING_PENDING,
  INIT_FETCHING_FULFILLED,
  INIT_FETCHING_REJECTED,
} from '../constants';
import { initializeDevice } from '../libraries/api';

export type InitData = {};
export type InitAction = {
  type: INIT_FETCHING | INIT_FETCHING_PENDING | INIT_FETCHING_FULFILLED | INIT_FETCHING_REJECTED;
  payload: InitData;
};

export function fetchInitData(): InitAction {
  return {
    type: INIT_FETCHING,
    payload: initializeDevice(),
  };
}
