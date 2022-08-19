// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from "react";
import { Button } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <Button color="red" onClick={() => logout()}>
          Log Out
        </Button>
      )}
      {!isAuthenticated && (
        <Button color="green" onClick={() => loginWithRedirect()}>
          Login/Sign Up
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
