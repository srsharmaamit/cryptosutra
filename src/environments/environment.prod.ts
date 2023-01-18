// @ts-ignore
import packageInfo from '../../package.json';

export const environment = {
  production: true,
  alphaVantageKey: 'KFWI2VCL52WUISLJ',
  alphaVantageEndpoint: 'https://www.alphavantage.co/query?',
  firebaseConfig: {
    apiKey: 'undefined',
    authDomain: 'undefined',
    projectId: 'undefined',
    storageBucket: 'undefined',
    messagingSenderId: 'undefined',
    appId: 'undefined',
    measurementId: 'undefined',
  },
  title: 'undefined',
  name: packageInfo.name,
  version: packageInfo.version,
};
