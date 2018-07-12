// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBFIMWAFrxfboG9nu9SlJzW01Xn9PtqXrM',
    authDomain: 'population-e7bac.firebaseapp.com',
    databaseURL: 'https://population-e7bac.firebaseio.com',
    projectId: 'population-e7bac',
    storageBucket: 'population-e7bac.appspot.com',
    messagingSenderId: '190820549281'
  }
};
