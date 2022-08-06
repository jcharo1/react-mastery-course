import React from "react";
import LoginButton from "./LoginButton";
class NavBar extends React.Component {
  render() {
    return (
      <div className="ui mini menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <div className="right menu">
          <div className="item">
            <LoginButton>Sign Up/Sign In</LoginButton>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
