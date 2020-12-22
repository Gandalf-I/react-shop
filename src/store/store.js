import {combineReducers, createStore} from 'redux';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore'

const roodReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  roodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
