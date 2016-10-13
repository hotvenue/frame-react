'use strict';

import DeviceInfo from 'react-native-device-info';

import { INITIALIZING } from './types';

export default function initialize() {
  return (dispatch) => {
    // const identifierForVendor = DeviceInfo.getDeviceId();
    const identifierForVendor = 'FCA5A7BD-7E4B-4E37-A051-A8D8FC51D6EE';

    return fetch(`http://api.hotvenueapp.com/device?identifierForVendor=${identifierForVendor}`)
      .then((res) => res.json())
      .then((res) => {
        const device = res[0];

        dispatch({
          type: INITIALIZING,
          device,
        });
      });
  };
}
