import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

//
// LogoutButton using same auth0-react front end sdk
//

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledLogout onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </StyledLogout>
  );
};

const StyledLogout = styled.button `
background-color: #FFB2B2;
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

export default LogoutButton;