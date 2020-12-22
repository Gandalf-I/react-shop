import firebase from "firebase";
import store from "../store/store";
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

export const rrfProps = {
  firebase,
  config: { userProfile: 'users', useFirestoreForProfile: true },
  dispatch: store.dispatch,
  createFirestoreInstance
}

firebase.firestore();
