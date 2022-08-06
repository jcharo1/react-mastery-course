import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
