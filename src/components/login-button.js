import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
        className="btn btn-primary btn-margin"
        onClick={() => loginWithRedirect()}
    //   id="qsLoginBtn"
    //   variant="primary"
    //   className="btn-margin"
    >
      Log In
    </button>
  );
};

export default LoginButton;