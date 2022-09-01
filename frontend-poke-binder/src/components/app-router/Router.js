import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AccountSettings from "../../views/AccountSettings";
import App from "../App";
import Profile from "../../views/Profile";
import Header from "../Header";
import { Segment } from "semantic-ui-react";
import NavBar from "../NavBar";
const Router = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={App} />
          <Route path="/profile/:id?" exact component={Profile} />

          <Route path="/accountsettings" exact component={AccountSettings} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
