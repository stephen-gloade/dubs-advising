import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loading from "./LoadingSpinner";
import QuestionForm from "./QuestionForm";

const Settings = () => {

    const { isAuthenticated, isLoading, user, logout } = useAuth0();
    const [name, setName] = useState(false);
    const navigate = useNavigate();
    const [displayDelete, setDisplayDelete] = useState(false)

    if (isAuthenticated && !isLoading) {
        const userIdWithoutAuth0 = user.sub.split('|')[1];
      
    const deleteUser = async (userId) => {
        try {
          const response = await fetch(`/users/${userId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);
          } else {
            const error = await response.json();
            console.error('Error:', error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    // {user.name}
    return (
    <CallBackWrapper>
        <Message>Account Information</Message>
        <AccountInfo>
            <UserNameKey>Username</UserNameKey>
            <UserNameValue>{user.name}</UserNameValue>
            <NameKey>Nickname</NameKey>
            <NameValue>{user.nickname}</NameValue>
        </AccountInfo>
        <Button onClick={() => {setDisplayDelete(true)}}>DELETE ACCOUNT</Button>

        { displayDelete ? <DeleteWrap><P>Are you sure you want to delete your account? Clicking <Span>'Yes Delete'</Span> will <Span>delete</Span> your account <Span>forever</Span>... </P><ConfirmDelete onClick={() => {deleteUser(userIdWithoutAuth0);logout({ logoutParams: { returnTo: window.location.origin } })}}>Yes Delete</ConfirmDelete></DeleteWrap> : null}
    </CallBackWrapper>
    );
    } else {
        return(
            <Loading/>
        )
    }};

    const Span = styled.span `
    color: red;
    font-weight: 700;
    `

    const Button = styled.button`
    background-color: #FFB2B2;
    text-decoration: none;
    margin-top: 10px;
    width: 40%;
    height: 50px;
    border-radius: 5px;
    font-size: 26px;

    :hover {
      cursor: pointer;
    }
    `

    const UserNameKey = styled.p`
    grid-column: 1 / 2;
    border-bottom: 1px #21F292 solid;
    color: #fff;
    place-content: center;
    font-size: 26px;
    width: 150px;
    text-align: center;
    padding-bottom: 10px;

    `

    const UserNameValue = styled.p`
    grid-column: 2 / 3;
    color: #fff;
    font-size: 26px;
    width: 150px;
    `
    const NameKey = styled.p`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    border-bottom: 1px #21F292 solid;
    color: #fff;
    font-size: 26px;
    width: 150px;
    text-align: center;
    padding-bottom: 10px;
    `

    const NameValue = styled.p`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    color: #fff;
    font-size: 26px;
    width: 150px;
    `


    const AccountInfo = styled.div`
    display: grid;
    grid-gap: 50px 50px;
    width: 50%;
    margin: 30px;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    `

    const ConfirmDelete = styled.button`
    background-color: red;
    width: 200px;
    height: 70px;
    border-radius: 5px;
    text-decoration: none;
    border: 3px black solid;
    font-size: 30px;
    margin: 30px;
    color: white;

    :hover {
        cursor: pointer;
    }
    `

    const DeleteWrap = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    `
    const P = styled.p`
    text-align: center;
    `

    const Message = styled.h1`
    color: #21F292;
    font-size: 45px;
    text-align: center;
    padding-top: 5%;
    font-weight: 100;
    `

    const CallBackWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    `

export default Settings