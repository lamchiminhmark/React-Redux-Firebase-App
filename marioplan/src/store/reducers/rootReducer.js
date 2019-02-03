import { authReducer } from './authReducer';
import { projectReducer } from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  // firestoreReducer is an object that will passed to mapStateToProps as arguments
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
