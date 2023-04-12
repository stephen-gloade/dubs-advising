import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


//
//  LoginButton component, uses auth0-react sdk to log you in from the front-end without need of backend
//  In hindsight, this 'front-end only' shortcut bit me badly.
//  So much more work had to be done to set-up auth0 related RESTS
//

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledLogin onClick={() => loginWithRedirect()}>Login</StyledLogin>;
};


const StyledLogin = styled.button `
background-color: #21F292;
width: 100px;
height: 35px;
border-radius: 25px;
text-decoration: none;
border: none;
font-size: 18px;

:hover {
  cursor: pointer;
}

`

export default LoginButton;



