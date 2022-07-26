import React from "react";
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
