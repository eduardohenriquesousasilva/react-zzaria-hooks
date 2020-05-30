import { useState, useEffect } from 'react';

import 'firebase/auth';
import 'firebase/analytics';
import firebase from 'firebase/app';

const CONFIGS = {
  apiKey: 'AIzaSyBM_m9CdfPo19u5H1tki7pwc0ndf2ZQ8qs',
  authDomain: 'reactzzaria-2ec31.firebaseapp.com',
  databaseURL: 'https://reactzzaria-2ec31.firebaseio.com',
  projectId: 'reactzzaria-2ec31',
  storageBucket: 'reactzzaria-2ec31.appspot.com',
  messagingSenderId: '17210721638',
  appId: '1:17210721638:web:617255018fe451a137b4a7',
  measurementId: 'G-Q0YGQKB8PR',
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
 */
export const formatUserInfo = (data = null) => {
  const isLogged = !(data === null);

  if (!isLogged) {
    return {
      isLogged,
      user: null,
    };
  }

  return {
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
        formatUserInfo(user.providerData[0]),
      );
    }

    return callbackHandleLoggedUser(formatUserInfo());
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

/**
 * Custom Hook to manager logged user,
 * this hook can be used in many other pieces
 * of the application to retrieve logged user
 */
export const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({
    isLogged: false,
    user: null,
  });

  useEffect(() => {
    retrieveUser(setUserInfo);
  }, []);

  return [userInfo, setUserInfo];
};
