import {Redirect, Route} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {isEmpty, isLoaded} from "react-redux-firebase";

const AuthRoute = ({component: Component, ...rest}) => {
  const auth = useSelector(state => state.firebase.auth)
  console.log(auth, isLoaded(auth), isEmpty(auth))

  return (
    <Route
      {...rest}
      render={({props}) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to="/auth"
          />
        )
      }
    />
  );
}


export default AuthRoute;
