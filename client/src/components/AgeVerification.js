import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AgeVerification = () => {
  const { user } = useAuth0();
  const userIdWithoutAuth0 = user.sub.split("|")[1];
  const [verified, setVerified] = useState(false);

  const handleVerification = async () => {
    try {
      const response = await fetch(`/users/${userIdWithoutAuth0}/age`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          over_18: true,
        }),
      });
      if (response.ok) {
        setVerified(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {!verified && (
        <Button onClick={handleVerification}>Verify you are 18 years or older</Button>
      )}
      {verified && <P>Age verified!</P>}
    </div>
  );
};

const Button = styled.button`
text-decoration: none;
border: none;
height: 40px;
width: 250px;
background-color: #21F292;
border-radius: 5px;
`

const P = styled.p`
font-size: 30px;
color: #fff;
`


export default AgeVerification;
