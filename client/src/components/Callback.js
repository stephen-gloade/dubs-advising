import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loading from "./LoadingSpinner";
import Ellipsis from "./Elipsis";


//
//  Callback component / url passed to auth0 to be used after logging into your account
//  checking if authenticated, conditionally renders based on that
//


const Callback = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [name, setName] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setName(true)
      const timer = setTimeout(() => {
        navigate('/home');
      }, 4000); // Display the message for 3 seconds before redirecting
      console.log("running")
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  return (
    <CallBackWrapper>
      <Message>{name ? `${user.name}, thank you for logging in!` : <Loading/>}</Message>
      <Redirect>{name ? <>You will be redirected shortly...<Ellipsis/></> : null}</Redirect>
    </CallBackWrapper>
  );
  }  

  const Redirect = styled.h2`
  text-align: center;
  padding-top: 30px;
  color: #21F292; 
  font-weight: 100;
  
  `

  const Message = styled.h1`
  color: #21F292;
  font-size: 45px;
  text-align: center;
  padding-top: 15%;
  font-weight: 100;
  `

  const CallBackWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  `
export default Callback;
