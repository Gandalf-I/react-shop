import {Redirect} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {isEmpty, isLoaded} from "react-redux-firebase";

const AuthRoute = ({children}) => {
  const auth = useSelector(state => state.firebase.auth)

  return (
    isLoaded(auth) && !isEmpty(auth) ?
      children :
      (
        <Redirect
          to="/auth"
        />
      )
  );
}


export default AuthRoute;
