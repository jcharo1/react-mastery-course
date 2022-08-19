import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Router from "./components/app-router/Router";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./components/utilites/history";
import { getConfig } from "./components/config";
const config = getConfig();
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Router />
  </Auth0Provider>,
  document.getElementById("root")
);
