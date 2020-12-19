import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from 'firebase/app'
import {createFirestoreInstance} from "redux-firestore";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAtKThC_ywxlwvAiWEViqNk3PzGb7OdCSI",
  authDomain: "react-shop-689c2.firebaseapp.com",
  projectId: "react-shop-689c2",
  storageBucket: "react-shop-689c2.appspot.com",
  messagingSenderId: "873391603380",
  appId: "1:873391603380:web:8de9b7769210bb0c8761e1"
};

firebase.initializeApp(firebaseConfig)

const rrfProps = {
  firebase,
  config: { userProfile: 'users', useFirestoreForProfile: true },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App/>
        </ReactReduxFirebaseProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
