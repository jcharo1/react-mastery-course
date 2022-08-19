import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Pokemon Search
      </Link>

      {isAuthenticated && (
        <div className="right menu">
          <Link to="/profile" className="item">
            Profile
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <div className="right menu">
          <Link to="/accountsettings" className="item">
            Account Settings
          </Link>
        </div>
      )}
      {isAuthenticated && (
        <div className="right menu">
          <LoginButton />
        </div>
      )}
      {!isAuthenticated && (
        <div className="right menu">
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Header;
