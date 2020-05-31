import 'firebase/auth';
import 'firebase/analytics';
import firebase from 'firebase/app';

const CONFIGS = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

/**
 * Intialize Firebase
 */
firebase.initializeApp(CONFIGS);
firebase.analytics();

/**
 * Default provider configs that will use
 * to do login user
 */
const makeProvider = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope('read:user');

  return provider;
};

/**
 * User data format to persist default properties
 *
 * @param {Object} data
 * @param {boolean} checkedLogged
 */
export const formatUserInfo = (data = null, checkedLogged = false) => {
  const isLogged = !(data === null);

  if (!isLogged) {
    return {
      checkedLogged,
      isLogged,
      user: null,
    };
  }

  return {
    checkedLogged,
    isLogged,
    user: {
      uid: data.uid,
      name: data.displayName,
      email: data.email,
      phone: data.phoneNumber,
      picture: data.photoURL,
      provider: data.providerId,
    },
  };
};

/**
 * Retrieve a logged user using Firebase observer
 *
 * @param {function} callbackHandleLoggedUser
 */
export const retrieveUser = (callbackHandleLoggedUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return callbackHandleLoggedUser(
        formatUserInfo(user.providerData[0], true),
      );
    }
    return callbackHandleLoggedUser(formatUserInfo(null, true));
  });
};

/**
 * Login method using Firebase
 */
export const login = () => {
  const provider = makeProvider();
  firebase.auth().signInWithRedirect(provider);
};

/**
 * Logout using Firebase this method return
 * a Promise
 *
 * @return {Promise}
 */
export const logout = () => firebase.auth().signOut();
