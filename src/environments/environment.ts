// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import {customEnvironment} from './environment.custom';
// export const environment = customEnvironment;

export const environment = {
  production: false,
  alphaVantageKey: 'undefined',
  alphaVantageEndpoint: 'undefined',
  firebaseConfig: {
    apiKey: "AIzaSyCWT8Ce0CVxC1AWovZnTSWYNuwQ_DWTVcY",
    authDomain: "cryptozenith.firebaseapp.com",
    databaseURL: "https://cryptozenith-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cryptozenith",
    storageBucket: "cryptozenith.appspot.com",
    messagingSenderId: "951320122952",
    appId: "1:951320122952:web:30e08704d978b946b1aa7d"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
