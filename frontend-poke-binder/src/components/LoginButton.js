import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
// https://fsnd778.us.auth0.com/authorize?audience=pokemon&response_type=token&client_id=0nNpheAYkXJwpOiKUOFlBRRAkU2Jk8U7&redirect_uri=https://127.0.0.1:3000/login-results
