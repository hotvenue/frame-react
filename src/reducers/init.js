// @flow

import type { InitData, InitAction } from '../actions/init';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

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
    case FETCHING_DATA:
      return {
        ...state,
        initData: {},
        initDataFetching: true,
      };

    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        initDataFetching: false,
        initData: action.data,
      };

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        initDataFetching: false,
        initDataError: true,
      };

    default:
      return state;
  }
}
