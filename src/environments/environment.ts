import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const environment = {
  firebase: {
    apiKey: "AIzaSyAa-U_brs9wUX4a_G7x0wl4zru20JcPql8",
    authDomain: "how-to-choose-an-ogso-ski.firebaseapp.com",
    databaseURL: "https://how-to-choose-an-ogso-ski-default-rtdb.firebaseio.com",
    projectId: "how-to-choose-an-ogso-ski",
    storageBucket: "how-to-choose-an-ogso-ski.appspot.com",
    messagingSenderId: "521463964329",
    appId: "1:521463964329:web:d4b68be996f6eab430bfb8",
    measurementId: "G-DKEDPXKSQW"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


const app = initializeApp(environment.firebase);


const database = getDatabase(app);