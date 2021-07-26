import adBlockDetect from '../security/adBlockDetect';

export default async function data() {
  const remoteAdress = '0000';

  const body: any = {
    ip: remoteAdress ? true : false,
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack === '1' ? true : false,
    browser: {
      adsAllowed: await adBlockDetect(),
      // @ts-ignore
      isBrave: typeof navigator.brave !== 'undefined' ? true : false,
    },
  };

  return body;
}
