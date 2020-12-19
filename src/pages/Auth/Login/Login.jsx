import React from 'react';
import './Login.scss'
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router";
import FormAuth from "../FormAuth/FormAuth";

const Login = () => {
  const firebase = useFirebase();
  const history = useHistory()

  const loginUser = ({email, password}) => {
    firebase.login({email, password}).then(() => history.push('/'));
  };

  return (
    <FormAuth name="Log In" submit={loginUser}/>
  );
}

export default Login
