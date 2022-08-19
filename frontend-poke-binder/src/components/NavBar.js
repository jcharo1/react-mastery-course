import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Pokemon Search
      </Link>
      <div className="right menu">
        <Link to="/profile" className="item">
          Profile
        </Link>
      </div>
      <div className="right menu">
        <Link to="/accountsettings" className="item">
          Account Settings
        </Link>
      </div>
    </div>
  );
};

export default Header;
