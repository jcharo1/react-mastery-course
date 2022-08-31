import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";
// const Header = () => {
//   const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
//     useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }
//   return (
//     <div className="ui menu">
//       <Link to="/" className="item">
//         Pokemon Search
//       </Link>

//       {isAuthenticated && (
//         <div className="right menu">
//           <Link to="/profile" className="item">
//             Profile
//           </Link>
//         </div>
//       )}
//       {isAuthenticated && (
//         <div className="right menu">
//           <Link to="/accountsettings" className="item">
//             Account Settings
//           </Link>
//         </div>
//       )}
//       {isAuthenticated && (
//         <div className="right menu">
//           <LoginButton />
//         </div>
//       )}
//       {!isAuthenticated && (
//         <div className="right menu">
//          < LoginButton className="button-navbar" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Menu
      stackable
      style={{
        padding: "0px 10px 10px 0px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Menu.Item name="default" fitted>
        <Link to="/" className="item">
          Pokemon Search
        </Link>
      </Menu.Item>

      <Menu.Item>
        {isAuthenticated && (
          <Link to="/profile" className="item">
            Profile
          </Link>
        )}
      </Menu.Item>

      <Menu.Item>
        {isAuthenticated && (
          <Link to="/accountsettings" className="item">
            Account Settings
          </Link>
        )}
      </Menu.Item>

      <Menu.Item>
        {isAuthenticated && <LoginButton />}
        {!isAuthenticated && <LoginButton className="button-navbar" />}
      </Menu.Item>
    </Menu>
  );
};

export default Header;
