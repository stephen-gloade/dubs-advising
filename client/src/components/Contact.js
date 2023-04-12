import styled from "styled-components";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import QuestionForm from "./QuestionForm";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

//
//  Contact page, QuestionForm component is rendered here.
//


const Contact = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    return (
        <>
            <ContactWrapper>
                <H1>Contact</H1>
                <ContactContainer>
                <IconContext.Provider value={{ color: '#21F292', size: '50px' }}>
                <A href="https://www.instagram.com/dubsadvisinginc/" target="blank">
                    <ItemWrap>
                        <h2>Instagram</h2>
                        <BsInstagram/>
                        <p>@dubsadvisinginc</p>
                    </ItemWrap>
                </A>
                <A>
                    <ItemWrap>
                        <h2>Website Feedback</h2>
                        {isAuthenticated && !isLoading ? <QuestionForm/> : <><LoginButton/><p>Please login to provide feedback</p></>}
                    </ItemWrap>
                </A>
                <A href="https://t.me/dubs_helper" target="blank">
                    <ItemWrap>
                        <h2>Telegram</h2>
                        <BsTelegram/>
                        <p>dubs_helper</p>
                    </ItemWrap>
                </A>
                </IconContext.Provider>
                </ContactContainer>
            </ContactWrapper>
        </>
    )
}

const A = styled.a`
text-decoration: none;
color: #fff;
transform: scale(1.0);

:hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
}
`

const ItemWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: #323232;
width: 300px;
height: 400px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 25px;
margin: 0px 40px;

`


const ContactContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`

const H1 = styled.h1`
    color: #21F292;
    font-size: 45px;
    text-align: center;
    padding-top: 5%;
    padding-bottom: 5%;
    font-weight: 100;
`

const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;

`

export default Contact;