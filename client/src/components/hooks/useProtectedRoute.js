import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Ellipsis from '../Elipsis';

const useProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setDisplayMessage(true);
      const timer = setTimeout(() => {
        setDisplayMessage(false);
        navigate('/home');
      }, 4000); // Display the message for 3 seconds before redirecting

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, navigate]);

  return displayMessage ? <DivWrap><Message>Please <Span>log in</Span> to access this page... <Redirect>You will be redirected to the homescreen</Redirect><Ellipsis/></Message></DivWrap> : null;
};

const Span = styled.span`
color: #21F292;
`
const Redirect = styled.h5`
text-align: center;
padding-top: 30px;
color: #21F292; 
font-weight: 100;

`
const Message = styled.h1`
color: #fff;
font-size: 45px;
text-align: center;
padding-top: 15%;
font-weight: 100;
`

const DivWrap = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
export default useProtectedRoute;
