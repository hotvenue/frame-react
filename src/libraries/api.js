// @flow

const apiUrl = 'http://api.hotvenueapp.com';

// eslint-disable-next-line import/prefer-default-export
export async function initializeDevice() {
  const identifierForVendor = 'E0430B1B-5744-4A1B-B382-A13B54049FCC';

  const res = await fetch(`${apiUrl}/devices?identifierForVendor=${identifierForVendor}`);
  const json = await res.json();

  const device = json[0];

  if (!device) {
    throw new Error('No device found');
  }

  return device;
}
