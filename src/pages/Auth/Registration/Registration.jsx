import React from 'react';
import './Registration.scss'
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router";
import FormAuth from "../FormAuth/FormAuth";

const Registration = () => {
  const firebase = useFirebase();
  const history = useHistory()

  const registrationUser = ({email, password}) => {
    firebase.createUser({email, password}).then(() => history.push('/products'));
  };

  return (
    <FormAuth name="Sign Up" submit={registrationUser}/>
  );
}

export default Registration
