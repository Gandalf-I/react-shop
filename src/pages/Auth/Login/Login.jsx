import React, {useEffect} from 'react';
import './Login.scss'
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router";
import FormAuth from "../FormAuth/FormAuth";
import {useSelector} from "react-redux";

const Login = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const auth = useSelector(state => state.firebase.auth)

  const loginUser = ({email, password}) => {
    firebase.login({email, password});
  };

  useEffect(() => {
    if (auth.isLoaded && !auth.isEmpty) {
      history.push('/products')
    }
  })

  return (
    <FormAuth name="Log In" submit={loginUser}/>
  );
}

export default Login
