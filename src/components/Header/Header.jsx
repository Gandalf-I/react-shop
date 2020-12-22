import React from "react";
import {useFirebase} from "react-redux-firebase";
import {Button} from "antd";
import "./Header.scss"
import {NavLink} from "react-router-dom";

const Header = () => {

  const firebase = useFirebase();

  const logout = () => {
    firebase.logout();
  }

  return (
    <div className="Header-Wrap">
      <div className="Header">
        <nav className="Navigation">
          <NavLink
            to='/products'
            className="Link"
            activeClassName='ActiveLink'
          >
            Product list
          </NavLink>
          <NavLink
            to='/create-product'
            className="Link"
            activeClassName='ActiveLink'
          >
            Create product
          </NavLink>
        </nav>
        <Button
          danger
          type="primary"
          className="Logout"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Header
