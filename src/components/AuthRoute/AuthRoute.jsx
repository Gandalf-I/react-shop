import {Redirect, Route} from "react-router-dom";
import React from "react";

const AuthRoute = ({ children, ...rest }) => {
  let auth = {user:{}}

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
