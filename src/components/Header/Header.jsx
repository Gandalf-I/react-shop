import React from "react";
import {Link} from "react-router-dom";
import {useFirebase} from "react-redux-firebase";
import {Button} from "antd";
import "./Header.scss"

const Header = () => {

  const firebase = useFirebase();

  const logout = () => {
    firebase.logout();
  }

  return (
    <div className="Header-Wrap">
      <div className="Header">
        <nav className="Navigation">
          <Link
            to='/products'
            className="Link"
          >
            Product list
          </Link>
          <Link
            to='/create-product'
            className="Link"
          >
            Create product
          </Link>
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
