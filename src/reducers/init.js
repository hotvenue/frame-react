// @flow

import type { InitData, InitAction } from '../actions/init';
import {
  INIT_FETCHING,
  INIT_FETCHING_PENDING,
  INIT_FETCHING_FULFILLED,
  INIT_FETCHING_REJECTED,
} from '../constants';

export type InitState = {
  initData: InitData;
  initDataFetching: boolean;
  initDataError: boolean;
};

const initState = {
  initData: {},
  initDataFetching: false,
  initDataError: false,
};

export default function initReducer(
  state: InitState = initState,
  action: InitAction,
): InitState {
  switch (action.type) {
    case INIT_FETCHING:
    case INIT_FETCHING_PENDING:
      return {
        ...state,
        initData: {},
        initDataFetching: true,
      };

    case INIT_FETCHING_FULFILLED:
      return {
        ...state,
        initDataFetching: false,
        initData: action.payload,
      };

    case INIT_FETCHING_REJECTED:
      return {
        ...state,
        initDataFetching: false,
        initDataError: true,
      };

    default:
      return state;
  }
}
