'use strict';

export const INITIALIZING = 'INITIALIZING';

export type Action =
  {
    type: INITIALIZING,
    device: {
      id: string;
      name: string;
      identifierForVendor: string;
      location: {
        id: string;
        name: string;
        hashtag: string;
        email: ?string;
        geoLatitude: string;
        geoLongitude: string;
        urlFrame: {
          '1x': string;
          '2x': string;
          pro: string;
        };
        urlFrameThanks: {
          '1x': string;
          '2x': string;
          pro: string;
        };
        urlWatermark: {
          '1x': string;
          '2x': string;
          pro: string;
        };
      };
    },
  }
;
