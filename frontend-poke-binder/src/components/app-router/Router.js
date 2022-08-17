import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "../App";
import Profile from "../../views/Profile";
import Header from "../Header";

const Router = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={App} />
          <Route path="/profile" exact component={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
