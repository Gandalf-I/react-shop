import {combineReducers, createStore} from 'redux';
import productReducers from "./product";
import {firebaseReducer} from "react-redux-firebase";

const roodReducer = combineReducers({
  firebase: firebaseReducer,
  product: productReducers,
});

const store = createStore(
  roodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
